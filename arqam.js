//
// DATA
//

const kitab = {
  singular: {
    nominative: { lat: 'kitābun', ar: 'كتابٌ' },
    accusative: { lat: 'kitāban', ar: 'كتابًا' },
    genitive: { lat: 'kitābin', ar: 'كتابٍ' }
  },
  dual: {
    nominative: { lat: 'kitābāni', ar: 'كتابانِ' },
    oblique: { lat: 'kitābayni', ar: 'كتابَيْنِ' }
  },
  plural: { lat: 'kutubin', ar: 'كتبٍ' }
}

const safhah = {
  singular: {
    nominative: { lat: 'ṣafḥatun', ar: 'صفحةٌ' },
    accusative: { lat: 'ṣafḥatan', ar: 'صفحةً' },
    genitive: { lat: 'ṣafḥatin', ar: 'صفحةٍ' }
  },
  dual: {
    nominative: { lat: 'ṣafḥatāni', ar: 'صفحتانِ' },
    oblique: { lat: 'ṣafḥatayni', ar: 'صفحتَيْنِ' }
  },
  plural: { lat: 'ṣafaḥātin', ar: 'صفحاتٍ' }
}

const one = {
  masculine: {
    nominative: { lat: 'wāḥidun', ar: 'واحدٌ' },
    accusative: { lat: 'wāḥidan', ar: 'واحدًا' },
    genitive: { lat: 'wāḥidin', ar: 'واحدٍ' }
  },
  feminine: {
    nominative: { lat: 'wāḥidatun', ar: 'واحدةٌ' },
    accusative: { lat: 'wāḥidatan', ar: 'واحدةً' },
    genitive: { lat: 'wāḥidatan', ar: 'واحدةٍ' }
  }
}

const two = {
  masculine: {
    nominative: { lat: 'ithnāni', ar: 'اثنانِ' },
    oblique: { lat: 'ithnayni', ar: 'اثنَيْنِ' }
  },
  feminine: {
    nominative: { lat: 'ithnatāni', ar: 'اثنتانِ' },
    oblique: { lat: 'ithnatayni', ar: 'اثنتَيْنِ' }
  }
}

const three = {
  masculine: {
    nominative: { lat: 'thalāthu', ar: 'ثلاثُ' },
    accusative: { lat: 'thalātha', ar: 'ثلاثَ' },
    genitive: { lat: 'thalāthi', ar: 'ثلاثِ' }
  },
  feminine: {
    nominative: { lat: 'thalāthatu', ar: 'ثلاثةُ' },
    accusative: { lat: 'thalāthata', ar: 'ثلاثةَ' },
    genitive: { lat: 'thalāthati', ar: 'ثلاثةِ' }
  },
  mstandalone: {
    nominative: { lat: 'thalāthun', ar: 'ثلاثٌ' },
    accusative: { lat: 'thalāthan', ar: 'ثلاثًا' },
    genitive: { lat: 'thalāthin', ar: 'ثلاثٍ' }
  },
  fstandalone: {
    nominative: { lat: 'thalāthatun', ar: 'ثلاثةٌ' },
    accusative: { lat: 'thalāthatan', ar: 'ثلاثةً' },
    genitive: { lat: 'thalāthatin', ar: 'ثلاثةٍ' }
  }
}

const four = {
  masculine: {
    nominative: { lat: 'arbaʿu', ar: 'أربعُ' },
    accusative: { lat: 'arbaʿa', ar: 'أربعَ' },
    genitive: { lat: 'arbaʿi', ar: 'أربعِ' }
  },
  feminine: {
    nominative: { lat: 'arbaʿatu', ar: 'أربعةُ' },
    accusative: { lat: 'arbaʿata', ar: 'أربعةَ' },
    genitive: { lat: 'arbaʿati', ar: 'أربعةِ' }
  },
  mstandalone: {
    nominative: { lat: 'arbaʿun', ar: 'أربعٌ' },
    accusative: { lat: 'arbaʿan', ar: 'أربعًا' },
    genitive: { lat: 'arbaʿin', ar: 'أربعٍ' }
  },
  fstandalone: {
    nominative: { lat: 'arbaʿatun', ar: 'أربعةٌ' },
    accusative: { lat: 'arbaʿatan', ar: 'أربعةً' },
    genitive: { lat: 'arbaʿatin', ar: 'أربعةٍ' }
  }
}

const five = {
  masculine: {
    nominative: { lat: 'khamsu', ar: 'خمسُ' },
    accusative: { lat: 'khamsa', ar: 'خمسَ' },
    genitive: { lat: 'khamsi', ar: 'خمسِ' }
  },
  feminine: {
    nominative: { lat: 'khamsatu', ar: 'خمسةُ' },
    accusative: { lat: 'khamsata', ar: 'خمسةَ' },
    genitive: { lat: 'khamsati', ar: 'خمسةِ' }
  },
  mstandalone: {
    nominative: { lat: 'khamsun', ar: 'خمسٌ' },
    accusative: { lat: 'khamsan', ar: 'خمسًا' },
    genitive: { lat: 'khamsin', ar: 'خمسٍ' }
  },
  fstandalone: {
    nominative: { lat: 'khamsatun', ar: 'خمسةٌ' },
    accusative: { lat: 'khamsatan', ar: 'خمسةً' },
    genitive: { lat: 'khamsatin', ar: 'خمسةٍ' }
  }
}

const six = {
  masculine: {
    nominative: { lat: 'sittu', ar: 'ستُّ' },
    accusative: { lat: 'sitta', ar: 'ستَّ' },
    genitive: { lat: 'sitti', ar: 'ستِّ' }
  },
  feminine: {
    nominative: { lat: 'sittatu', ar: 'ستّةُ' },
    accusative: { lat: 'sittata', ar: 'ستّةَ' },
    genitive: { lat: 'sittati', ar: 'ستّةِ' }
  },
  mstandalone: {
    nominative: { lat: 'sittun', ar: 'ستٌّ' },
    accusative: { lat: 'sittan', ar: 'ستًّا' },
    genitive: { lat: 'sittin', ar: 'ستٍّ' }
  },
  fstandalone: {
    nominative: { lat: 'sittatun', ar: 'ستّةٌ' },
    accusative: { lat: 'sittatan', ar: 'ستّةً' },
    genitive: { lat: 'sittatin', ar: 'ستّةٍ' }
  }
}

const seven = {
  masculine: {
    nominative: { lat: 'sabʿu', ar: 'سبعُ' },
    accusative: { lat: 'sabʿa', ar: 'سبعَ' },
    genitive: { lat: 'sabʿi', ar: 'سبعِ' }
  },
  feminine: {
    nominative: { lat: 'sabʿatu', ar: 'سبعةُ' },
    accusative: { lat: 'sabʿata', ar: 'سبعةَ' },
    genitive: { lat: 'sabʿati', ar: 'سبعةِ' }
  },
  mstandalone: {
    nominative: { lat: 'sabʿun', ar: 'سبعٌ' },
    accusative: { lat: 'sabʿan', ar: 'سبعًا' },
    genitive: { lat: 'sabʿin', ar: 'سبعٍ' }
  },
  fstandalone: {
    nominative: { lat: 'sabʿatun', ar: 'سبعةٌ' },
    accusative: { lat: 'sabʿatan', ar: 'سبعةً' },
    genitive: { lat: 'sabʿatin', ar: 'سبعةٍ' }
  }
}

const eight = {
  masculine: {
    nominative: { lat: 'thamānu', ar: 'ثمانُ' },
    accusative: { lat: 'thamāna', ar: 'ثمانَ' },
    genitive: { lat: 'thamāni', ar: 'ثمانِ' }
  },
  feminine: {
    nominative: { lat: 'thamāniyatu', ar: 'ثمانيةُ' },
    accusative: { lat: 'thamāniyata', ar: 'ثمانيةَ' },
    genitive: { lat: 'thamāniyati', ar: 'ثمانيةِ' }
  },
  mstandalone: {
    nominative: { lat: 'thamānun', ar: 'ثمانٌ' },
    accusative: { lat: 'thamānan', ar: 'ثمانًا' },
    genitive: { lat: 'thamānin', ar: 'ثمانٍ' }
  },
  fstandalone: {
    nominative: { lat: 'thamāniyatun', ar: 'ثمانيةٌ' },
    accusative: { lat: 'thamāniyatan', ar: 'ثمانيةً' },
    genitive: { lat: 'thamāniyatin', ar: 'ثمانيةٍ' }
  }
}

const nine = {
  masculine: {
    nominative: { lat: 'tisʿu', ar: 'تسعُ' },
    accusative: { lat: 'tisʿa', ar: 'تسعَ' },
    genitive: { lat: 'tisʿi', ar: 'تسعِ' }
  },
  feminine: {
    nominative: { lat: 'tisʿatu', ar: 'تسعةُ' },
    accusative: { lat: 'tisʿata', ar: 'تسعةَ' },
    genitive: { lat: 'tisʿati', ar: 'تسعةِ' }
  },
  mstandalone: {
    nominative: { lat: 'tisʿun', ar: 'تسعٌ' },
    accusative: { lat: 'tisʿan', ar: 'تسعًا' },
    genitive: { lat: 'tisʿin', ar: 'تسعٍ' }
  },
  fstandalone: {
    nominative: { lat: 'tisʿatun', ar: 'تسعةٌ' },
    accusative: { lat: 'tisʿatan', ar: 'تسعةً' },
    genitive: { lat: 'tisʿatin', ar: 'تسعةٍ' }
  }
}

const ten = {
  masculine: {
    nominative: { lat: 'ʿashru', ar: 'عشْرُ' },
    accusative: { lat: 'ʿashra', ar: 'عشْرَ' },
    genitive: { lat: 'ʿashri', ar: 'عشْرِ' }
  },
  feminine: {
    nominative: { lat: 'ʿasharatu', ar: 'عشرةُ' },
    accusative: { lat: 'ʿasharata', ar: 'عشرةَ' },
    genitive: { lat: 'ʿasharati', ar: 'عشرةِ' }
  }
}

const tenConstruct = {
  masculine: { lat: 'ʿashara', ar: 'عشرَ' },
  feminine: { lat: 'ʿashrata', ar: 'عشْرةَ' }
}

const eleven = {
  masculine: { lat: 'aḥada ʿashara', ar: 'أحدَ عشرَ' },
  feminine: { lat: 'iḥdá ʿashrata', ar: 'إحدى عشْرةَ' }
}

const twelve = {
  masculine: {
    nominative: { lat: 'ithnā ʿashara', ar: 'اثنا عشرَ' },
    oblique: { lat: 'ithnay ʿashara', ar: 'اثنَيْ عشرَ' }
  },
  feminine: {
    nominative: { lat: 'ithnatā ʿashrata', ar: 'اثنتا عشْرةَ' },
    oblique: { lat: 'ithnatay ʿashrata', ar: 'اثنتَيْ عشْرةَ' }
  }
}

const twenty = {
  nominative: { lat: 'ʿishrūna', ar: 'عشرونَ' },
  oblique: { lat: 'ʿishrīna', ar: 'عشرينَ' }
}

const thirty = {
  nominative: { lat: 'thalāthūna', ar: 'ثلاثونَ' },
  oblique: { lat: 'thalāthīna', ar: 'ثلاثينَ' }
}

const forty = {
  nominative: { lat: 'arbaʿūna', ar: 'أربعونَ' },
  oblique: { lat: 'arbaʿīna', ar: 'أربعينَ' }
}

const fifty = {
  nominative: { lat: 'khamsūna', ar: 'خمسونَ' },
  oblique: { lat: 'khamsīna', ar: 'خمسينَ' }
}

const sixty = {
  nominative: { lat: 'sittūna', ar: 'ستّونَ' },
  oblique: { lat: 'sittīna', ar: 'ستّينَ' }
}

const seventy = {
  nominative: { lat: 'sabʿūna', ar: 'سبعونَ' },
  oblique: { lat: 'sabʿīna', ar: 'سبعينَ' }
}

const eighty = {
  nominative: { lat: 'thamānūna', ar: 'ثمانونَ' },
  oblique: { lat: 'thamānīna', ar: 'ثمانينَ' }
}

const ninety = {
  nominative: { lat: 'tisʿūna', ar: 'تسعونَ' },
  oblique: { lat: 'tisʿīna', ar: 'تسعينَ' }
}

const oneHundred = {
  nominative: { lat: 'miʾatu', ar: 'مائةُ' },
  accusative: { lat: 'miʾata', ar: 'مائةَ' },
  genitive: { lat: 'miʾati', ar: 'مائةِ' }
}

//
// FUNCTIONS
//

function combineResults (number, gender, gramCase) {
  const nounResult = setNoun(number, gender, gramCase)
  const numberResult = setNumber(number, gender, gramCase)

  const nounLat = nounResult.lat
  const nounAr = nounResult.ar

  let numberLat, numberAr

  if (Array.isArray(numberResult)) {
    if (number >= 20) {
      numberLat = numberResult[0].lat + ' wa-' + numberResult[1].lat
      numberAr = numberResult[0].ar + ' و' + numberResult[1].ar
    } else {
      numberLat = numberResult[0].lat + ' ' + numberResult[1].lat
      numberAr = numberResult[0].ar + ' ' + numberResult[1].ar
    }
  } else {
    numberLat = numberResult.lat
    numberAr = numberResult.ar
  }

  if (number === 1 || number === 2) {
    return [nounLat + ' ' + numberLat, nounAr + ' ' + numberAr]
  } else {
    return [numberLat + ' ' + nounLat, numberAr + ' ' + nounAr]
  }
}

function mapNumber (number) {
  if (number === 90) {
    return ninety
  } else if (number === 80) {
    return eighty
  } else if (number === 70) {
    return seventy
  } else if (number === 60) {
    return sixty
  } else if (number === 50) {
    return fifty
  } else if (number === 40) {
    return forty
  } else if (number === 30) {
    return thirty
  } else if (number === 20) {
    return twenty
  } else if (number === 10) {
    return ten
  } else if (number === 9) {
    return nine
  } else if (number === 8) {
    return eight
  } else if (number === 7) {
    return seven
  } else if (number === 6) {
    return six
  } else if (number === 5) {
    return five
  } else if (number === 4) {
    return four
  } else if (number === 3) {
    return three
  } else if (number === 2) {
    return two
  } else {
    return one
  }
}

function setNoun (number, gender, gramCase) {
  if (number === 100) {
    if (gender === 'f') {
      return safhah.singular.genitive
    } else {
      return kitab.singular.genitive
    }
    // We use the plural noun form only in the range below
    // It's also always genitive via iḍāfah
  } else if (number >= 3 && number <= 10) {
    if (gender === 'f') {
      return safhah.plural
    } else {
      return kitab.plural
    }
  } else if (number === 2) {
    if (gramCase === 'g' || gramCase === 'a') {
      if (gender === 'f') {
        return safhah.dual.oblique
      } else {
        return kitab.dual.oblique
      }
    } else {
      if (gender === 'f') {
        return safhah.dual.nominative
      } else {
        return kitab.dual.nominative
      }
    }
  } else if (number === 1) {
    if (gramCase === 'g') {
      if (gender === 'f') {
        return safhah.singular.genitive
      } else {
        return kitab.singular.genitive
      }
    } else if (gramCase === 'a') {
      if (gender === 'f') {
        return safhah.singular.accusative
      } else {
        return kitab.singular.accusative
      }
    } else {
      if (gender === 'f') {
        return safhah.singular.nominative
      } else {
        return kitab.singular.nominative
      }
    }
    // By default, the counted noun is singular accusative
  } else {
    if (gender === 'f') {
      return safhah.singular.accusative
    } else {
      return kitab.singular.accusative
    }
  }
}

function setNumber (number, gender, gramCase) {
  if (number === 100) {
    if (gramCase === 'g') {
      return oneHundred.genitive
    } else if (gramCase === 'a') {
      return oneHundred.accusative
    } else {
      return oneHundred.nominative
    }
  } else if (number >= 20) {
    const tens = Math.floor(number / 10) * 10
    const ones = number % 10

    const tensMapping = mapNumber(tens)

    if (ones === 0) {
      if (gramCase === 'g' || gramCase === 'a') {
        return tensMapping.oblique
      } else {
        return tensMapping.nominative
      }
    }

    if (ones === 1) {
      if (gender === 'f') {
        if (gramCase === 'g') {
          return [one.feminine.genitive, tensMapping.oblique]
        } else if (gramCase === 'a') {
          return [one.feminine.accusative, tensMapping.oblique]
        } else {
          return [one.feminine.nominative, tensMapping.nominative]
        }
      } else {
        if (gramCase === 'g') {
          return [one.masculine.genitive, tensMapping.oblique]
        } else if (gramCase === 'a') {
          return [one.masculine.accusative, tensMapping.oblique]
        } else {
          return [one.masculine.nominative, tensMapping.nominative]
        }
      }
    }

    if (ones === 2) {
      if (gender === 'f') {
        if (gramCase === 'g' || gramCase === 'a') {
          return [two.feminine.oblique, tensMapping.oblique]
        } else {
          return [two.feminine.nominative, tensMapping.nominative]
        }
      } else {
        if (gramCase === 'g' || gramCase === 'a') {
          return [two.masculine.oblique, tensMapping.oblique]
        } else {
          return [two.masculine.nominative, tensMapping.nominative]
        }
      }
    }

    const onesMapping = mapNumber(ones)

    // Gender polarity!
    if (gender === 'f') {
      if (gramCase === 'g') {
        return [onesMapping.mstandalone.genitive, tensMapping.oblique]
      } else if (gramCase === 'a') {
        return [onesMapping.mstandalone.accusative, tensMapping.oblique]
      } else {
        return [onesMapping.mstandalone.nominative, tensMapping.nominative]
      }
    } else {
      if (gramCase === 'g') {
        return [onesMapping.fstandalone.genitive, tensMapping.oblique]
      } else if (gramCase === 'a') {
        return [onesMapping.fstandalone.accusative, tensMapping.oblique]
      } else {
        return [onesMapping.fstandalone.nominative, tensMapping.nominative]
      }
    }
  } else if (number >= 13) {
    const ones = number % 10
    const mapping = mapNumber(ones)

    // Gender polarity!
    if (gender === 'f') {
      return [mapping.masculine.accusative, tenConstruct.feminine]
    } else {
      return [mapping.feminine.accusative, tenConstruct.masculine]
    }
  } else if (number === 12) {
    if (gender === 'f') {
      if (gramCase === 'g' || gramCase === 'a') {
        return twelve.feminine.oblique
      } else {
        return twelve.feminine.nominative
      }
    } else {
      if (gramCase === 'g' || gramCase === 'a') {
        return twelve.masculine.oblique
      } else {
        return twelve.masculine.nominative
      }
    }
  } else if (number === 11) {
    if (gender === 'f') {
      return eleven.feminine
    } else {
      return eleven.masculine
    }
  } else if (number >= 3) {
    const mapping = mapNumber(number)

    // Gender polarity!
    if (gender === 'f') {
      if (gramCase === 'g') {
        return mapping.masculine.genitive
      } else if (gramCase === 'a') {
        return mapping.masculine.accusative
      } else {
        return mapping.masculine.nominative
      }
    } else {
      if (gramCase === 'g') {
        return mapping.feminine.genitive
      } else if (gramCase === 'a') {
        return mapping.feminine.accusative
      } else {
        return mapping.feminine.nominative
      }
    }
  } else if (number === 2) {
    if (gender === 'f') {
      if (gramCase === 'g' || gramCase === 'a') {
        return two.feminine.oblique
      } else {
        return two.feminine.nominative
      }
    } else {
      if (gramCase === 'g' || gramCase === 'a') {
        return two.masculine.oblique
      } else {
        return two.masculine.nominative
      }
    }
    // Default to 1
  } else {
    if (gender === 'f') {
      if (gramCase === 'g') {
        return one.feminine.genitive
      } else if (gramCase === 'a') {
        return one.feminine.accusative
      } else {
        return one.feminine.nominative
      }
    } else {
      if (gramCase === 'g') {
        return one.masculine.genitive
      } else if (gramCase === 'a') {
        return one.masculine.accusative
      } else {
        return one.masculine.nominative
      }
    }
  }
}

//
// SIDE EFFECTS
//

document.getElementById('submit-button').addEventListener('click', () => {
  let number = Number(document.getElementById('number').value)
  const gender = document.querySelector('input[name=gender]:checked').value
  const gramCase = document.querySelector('input[name=noun-case]:checked').value

  if (number > 100) {
    number = 100
    document.getElementById('number').value = 100
  } else if (number < 1) {
    number = 1
    document.getElementById('number').value = 1
  }

  const genderFull = gender === 'f' ? 'fem.' : 'masc.'
  const caseFull =
    gramCase === 'g' ? 'gen.' : gramCase === 'a' ? 'acc.' : 'nom.'

  document.getElementById('restatement').innerText =
    'number: ' + number + '; gender: ' + genderFull + '; case: ' + caseFull

  const results = combineResults(number, gender, gramCase)

  document.getElementById('result').innerText = results[0]
  document.getElementById('result-ar').innerText = results[1]
})

document.getElementById('number').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.getElementById('submit-button').click()
    document.activeElement.blur()
  }
})
