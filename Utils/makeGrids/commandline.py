"""
Set up an options list where the key is the single-letter option
	multiple letters are valid as a key, but won't be valid on the command line

The value of the options list is a dictionary with the following values:
	valText: the text description of the value that the argument requires; i.e. <filename>
	valRequired: if True, this argument requires a value; otherwise, it does not take a value
	longArg: the long argument name, i.e., 'help'; --help will then trigger this option
	required: if True, the argument is required
	help: Further help for the option
	action: a method or function to be performed if this option is present

All of the dictionary keys are optional; if not present they are assumed to be False or empty

Example:
	options = {}
	options['o'] = {'longArg':'output', 'valRequired':True, 'required':True }
	options['v'] = {'longArg':'verbose'}
	options['h'] = {'longArg':'help'}
	
	clOptions = commandline.arguments(options, 'myname')
	if 'h' in clOptions.optionDict or clOpts.error:
		clOpts.myHelp()
	elif 'o' in clOptions.optionDict:
		fileName = clOptions.optionDict['o']
	elif 'v' in clOptions.optionDict:
		verbose = True

Copyright 2006 Jerry Stratton
Released under the Gnu General Public License version 2

"""
import sys, getopt

class arguments:
	def __init__(self, options, commandName=None):
		self.options = options
		self.remainingArgs = None
		self.error = False

		#set up command-line options
		shortOptions = map(self.shortOptionKey, self.options)
		self.shortOptions = "".join(shortOptions)
		self.longOptions = map(self.longOptionKey, self.options)

		self.optionDict = {}
		self.command = commandName
		if len(sys.argv) > 1:
			try:
				optionList, self.remainingArgs = getopt.getopt(sys.argv[1:], self.shortOptions, self.longOptions)
				map(self.setOption, optionList)
			except getopt.GetoptError, moreInfo:
				print moreInfo
				self.error = True
		if self.remainingArgs:
			print "There are some unknown arguments:", self.remainingArgs


	def shortOptionKey(self, option):
		if len(option) == 1:
			optionInfo = self.options[option]
			if 'valRequired' in optionInfo:
				if optionInfo['valRequired']:
					return option + ':'
			return option
		else:
			return ""

	def longOptionKey(self, option):
		optionInfo = self.options[option]
		if 'longArg' in optionInfo:
			if 'valRequired' in optionInfo:
				if optionInfo['valRequired']:
					return optionInfo['longArg'] + '='
			return optionInfo['longArg']
		else:
			return None

	def optionWithLongKey(self, longKey):
		option = filter((lambda x: self.options[x]['longArg'] == longKey), self.options)
		if option:
			return option[0]
		else:
			return None

	def lineHelp(self, option):
		optionInfo = self.options[option]
		
		if len(option) == 1:
			help = '-' + option
		else:
			help = '--' + optionInfo['longArg']
		if 'valText' in optionInfo:
			help += ' ' + optionInfo['valText']
		if 'required' in optionInfo:
			required = optionInfo['required']
		else:
			required = False
		if not required:
			help = '[' + help + ']'
		return help

	def longHelp(self, option):
		optionInfo = self.options[option]
		help = []
		if len(option) == 1:
			help.append('-' + option)
		if 'longArg' in optionInfo:
			help.append('--' + optionInfo['longArg'])
		help = " or ".join(help)
		if 'valText' in optionInfo:
			help += ' ' + optionInfo['valText']
		if 'help' in optionInfo:
			help += ': ' + optionInfo['help']
		if 'required' in optionInfo:
			required = optionInfo['required']
		else:
			required = False
		if not required:
			help += ' (optional)'
		return help

	def setOption(self, optionPair):
		option, value = optionPair
		if option[:2] == '--':
			option = self.optionWithLongKey(option[2:])
		elif option[:1] == '-':
			option = option[1:]
		self.optionDict[option] = value
		
		if option:
			optionInfo = self.options[option]
			if 'action' in optionInfo:
				optionInfo['action'](value)

	def myHelp(self, option=None):
		commandHelp = " ".join(map(self.lineHelp, self.options))
		moreHelp = "\n\t".join(map(self.longHelp, self.options))
		if self.command:
			print self.command, commandHelp
		else:
			print commandHelp
		if moreHelp:
			print "\t" + moreHelp
