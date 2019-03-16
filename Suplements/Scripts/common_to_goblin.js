function isVovel (letter) {
  return 'AEIOUY'.includes(letter.toUpperCase())
}

function isConsolant (letter) {
  return 'BCDFGHJKLMNPQRSTVWXZ'.includes(letter.toUpperCase())
}

function isLetter (letter) {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter.toUpperCase())
}

function isWordStart (letter) {
  if (letter === '') {
    return true
  }
  return " -'".includes(letter)
}

function isWordEnd (letter) {
  if (letter === '') {
    return true
  }
  return " -.,;!'?".includes(letter)
}

function translate (phrase) {
  var Translated = ''

  var ContinuedTranslated = ''

  var ControlCons = 0

  var ControlDiph = 0

  var Prev = ''

  var Curr = ''

  var WordStart = 1

  var WordEnd = 0

  var TypeSwitches = 0

  for (var i = 0; i < phrase.length; i++) {
    Curr = phrase.charAt(i)

    if (isWordStart(Prev)) { WordStart = 1 }

    if (WordStart === 1) {
      TypeSwitches = CountTypeSwitches(phrase.substring(i, phrase.length))
    }

    if (TypeSwitches > 0) {
      if (isVovel(Prev) && isConsolant(Curr)) { TypeSwitches = TypeSwitches - 1 }
      if (isVovel(Curr) && isConsolant(Prev)) { TypeSwitches = TypeSwitches - 1 }
    }

    if (TypeSwitches < 1) {
      WordEnd = 1
    }

    if (i === (phrase.length)) { WordEnd = 1 }

    switch (Curr) {
      case 'A':
        Translated = 'A'
        ControlCons = 0
        if (ControlDiph === 1) {
          Translated = ''
          break
        }
        if (WordStart === 1) {
          Translated = 'A'
          ControlDiph = 1
          break
        }
        if (WordEnd === 1) {
          Translated = 'Uul'
          ControlDiph = 1
          break
        }
        ControlDiph = 1

        break

      case 'a':
        Translated = 'a'
        ControlCons = 0
        if (ControlDiph === 1) {
          Translated = ''
          break
        }
        if (WordStart === 1) {
          Translated = 'a'
          ControlDiph = 1
          break
        }
        if (WordEnd === 1) {
          Translated = 'uul'
          ControlDiph = 1
          break
        }
        ControlDiph = 1

        break

      case 'B': Translated = 'K'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Rh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'R'; ControlCons = 1; break };ControlCons = 1

        break

      case 'b': Translated = 'k'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'rh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'r'; ControlCons = 1; break };ControlCons = 1

        break

      case 'C': Translated = 'L'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Sh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'N'; ControlCons = 1; break };ControlCons = 1

        break

      case 'c': Translated = 'l'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'sh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'n'; ControlCons = 1; break };ControlCons = 1

        break

      case 'D': Translated = 'Rth'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Dr'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'L'; ControlCons = 1; break };ControlCons = 1

        break

      case 'd': Translated = 'rth'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'dr'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'l'; ControlCons = 1; break };ControlCons = 1

        break

      case 'E': Translated = 'Aa'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'O'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'Aan'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'e': Translated = 'aa'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'o'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'aan'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'F': Translated = 'Kl'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Dh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'R'; ControlCons = 1; break };ControlCons = 1

        break

      case 'f': Translated = 'kl'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'dh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'r'; ControlCons = 1; break };ControlCons = 1

        break

      case 'G': Translated = 'Rl'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'H'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'C'; ControlCons = 1; break };ControlCons = 1

        break

      case 'g': Translated = 'rl'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'h'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'c'; ControlCons = 1; break };ControlCons = 1

        break

      case 'H': Translated = "L't"; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'M'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'T'; ControlCons = 1; break };ControlCons = 1

        break

      case 'h': Translated = "l't"; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'm'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 't'; ControlCons = 1; break };ControlCons = 1

        break

      case 'I': Translated = 'E'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'A'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'Aal'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'i': Translated = 'e'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'a'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'aal'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'J': Translated = 'R'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Lh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'j': Translated = 'r'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'lh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'K': Translated = 'L'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'M'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'k': Translated = 'l'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'm'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'L': Translated = "L'd"; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'K'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Ch'; ControlCons = 1; break };ControlCons = 1

        break

      case 'l': Translated = "l'd"; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'k'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'ch'; ControlCons = 1; break };ControlCons = 1

        break

      case 'M': Translated = 'Lk'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Gh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'L'; ControlCons = 1; break };ControlCons = 1

        break

      case 'm': Translated = 'lk'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'gh'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'l'; ControlCons = 1; break };ControlCons = 1

        break

      case 'N': Translated = 'K'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Khr'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'C'; ControlCons = 1; break };ControlCons = 1

        break

      case 'n': Translated = 'k'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'khr'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'c'; ControlCons = 1; break };ControlCons = 1

        break

      case 'O': Translated = 'Uu'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'O'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'Uun'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'o': Translated = 'uu'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'o'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'uun'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'P': Translated = 'Kh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'H'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'C'; ControlCons = 1; break };ControlCons = 1

        break

      case 'p': Translated = 'kh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'h'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'c'; ControlCons = 1; break };ControlCons = 1

        break

      case 'Q': Translated = 'R'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'V'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'q': Translated = 'r'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'v'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'R': Translated = 'G'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'K'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'R'; ControlCons = 1; break };ControlCons = 1

        break

      case 'r': Translated = 'g'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'k'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'r'; ControlCons = 1; break };ControlCons = 1

        break

      case 'S':
        Translated = 'R';
        ControlDiph = 0;
        if (ControlCons == 1) {
          Translated = '';
          break 
        };
        if (WordStart == 1) {
          Translated = 'T';
          ControlCons = 1;
          break 
        };
        if (WordEnd == 1) {
          Translated = 'N';
          ControlCons = 1;
          break
        };
        ControlCons = 1

        break

      case 's': Translated = 'r'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 't'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'n'; ControlCons = 1; break };ControlCons = 1

        break

      case 'T': Translated = 'Kh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'D'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'R'; ControlCons = 1; break };ControlCons = 1

        break

      case 't': Translated = 'kh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'd'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'r'; ControlCons = 1; break };ControlCons = 1

        break

      case 'U': Translated = 'O'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'A'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'Uun'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'u': Translated = 'o'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'a'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'uun'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'V': Translated = 'G'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'Z'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'v': Translated = 'g'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'z'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'W': Translated = 'Lkh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'D'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'L'; ControlCons = 1; break };ControlCons = 1

        break

      case 'w': Translated = 'lkh'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'd'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'l'; ControlCons = 1; break };ControlCons = 1

        break

      case 'X': Translated = 'G'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'V'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'x': Translated = 'g'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'v'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'Y': Translated = 'U'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'O'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'Ec'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'y': Translated = 'u'; ControlCons = 0; if (ControlDiph == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'o'; ControlDiph = 1; break };if (WordEnd == 1) { Translated = 'ec'; ControlDiph = 1; break };ControlDiph = 1

        break

      case 'Z': Translated = 'K'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'V'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'Sh'; ControlCons = 1; break };ControlCons = 1

        break

      case 'z': Translated = 'k'; ControlDiph = 0; if (ControlCons == 1) { Translated = ''; break };if (WordStart == 1) { Translated = 'v'; ControlCons = 1; break };if (WordEnd == 1) { Translated = 'sh'; ControlCons = 1; break };ControlCons = 1

        break

      default: Translated = phrase.charAt(i); ControlCons = 0; ControlDiph = 0; TypeSwitches = 0
    }

    ContinuedTranslated = ContinuedTranslated.concat(Translated)

    WordStart = 0

    WordEnd = 0

    Prev = Curr
  }

  return ContinuedTranslated
}

function CountTypeSwitches (phrase) {
  if (isWordEnd(phrase.charAt(0))) {
    return 0
  }

  var count = 0

  for (var j = 1; j < phrase.length; j++) {
    var curr = phrase.charAt(j)
    var prev = phrase.charAt(j - 1)

    if (isVovel(prev) && isConsolant(curr)) {
      count = count + 1
    }

    if (isVovel(curr) && isConsolant(prev)) {
      count = count + 1
    }

    if (!isLetter(curr)) {
      return count
    }
  }

  return count
}

var phrases = [
  'Who goes there? Speak or be killed!',
  'A quick brown fox jumps over the lazy dog',
  'Au',
  'Happy',
  'Sad',
  'Aaaas'
]
for (var p in phrases) {
  console.log('---')
  console.log(phrases[p])
  console.log(translate(phrases[p]))
}
