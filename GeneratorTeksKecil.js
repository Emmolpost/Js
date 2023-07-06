function convertToSmallCaps(text) {
    var smallCapsChars = {
        'a': 'ᴀ',
        'b': 'ʙ',
        'c': 'ᴄ',
        'd': 'ᴅ',
        'e': 'ᴇ',
        'f': 'ꜰ',
        'g': 'ɢ',
        'h': 'ʜ',
        'i': 'ɪ',
        'j': 'ᴊ',
        'k': 'ᴋ',
        'l': 'ʟ',
        'm': 'ᴍ',
        'n': 'ɴ',
        'o': 'ᴏ',
        'p': 'ᴘ',
        'q': 'ǫ',
        'r': 'ʀ',
        's': 's',
        't': 'ᴛ',
        'u': 'ᴜ',
        'v': 'ᴠ',
        'w': 'ᴡ',
        'x': 'x',
        'y': 'ʏ',
        'z': 'ᴢ',
        'A': 'ᴀ',
        'B': 'ʙ',
        'C': 'ᴄ',
        'D': 'ᴅ',
        'E': 'ᴇ',
        'F': 'ꜰ',
        'G': 'ɢ',
        'H': 'ʜ',
        'I': 'ɪ',
        'J': 'ᴊ',
        'K': 'ᴋ',
        'L': 'ʟ',
        'M': 'ᴍ',
        'N': 'ɴ',
        'O': 'ᴏ',
        'P': 'ᴘ',
        'Q': 'ǫ',
        'R': 'ʀ',
        'S': 's',
        'T': 'ᴛ',
        'U': 'ᴜ',
        'V': 'ᴠ',
        'W': 'ᴡ',
        'X': 'x',
        'Y': 'ʏ',
        'Z': 'ᴢ',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '+': '+',
        '-': '-',
        '=': '=',
        '(': '(',
        ')': ')',
        '*': '*',
        '#': '#',
        '@': '@',
        '$': '$',
        '&': '&',
        '_': '_',
        '%': '%',
        '"': '"',
        "'": "'",
        ':': ':',
        '/': '/',
        '!': '!',
        '?': '?',
        ' ': ' ',
        '.': '.',
        ',': ',',
        ';': ';',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}'
    };

    var smallCapsText = '';
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        smallCapsText += smallCapsChars[char] || char;
    }

    return smallCapsText;
}


function convertToSuperscript(text) {
    var superscriptChars = {
        'a': 'ᵃ',
        'b': 'ᵇ',
        'c': 'ᶜ',
        'd': 'ᵈ',
        'e': 'ᵉ',
        'f': 'ᶠ',
        'g': 'ᵍ',
        'h': 'ʰ',
        'i': 'ⁱ',
        'j': 'ʲ',
        'k': 'ᵏ',
        'l': 'ˡ',
        'm': 'ᵐ',
        'n': 'ⁿ',
        'o': 'ᵒ',
        'p': 'ᵖ',
        'q': 'q',
        'r': 'ʳ',
        's': 'ˢ',
        't': 'ᵗ',
        'u': 'ᵘ',
        'v': 'ᵛ',
        'w': 'ʷ',
        'x': 'ˣ',
        'y': 'ʸ',
        'z': 'ᶻ',
        'A': 'ᴬ',
        'B': 'ᴮ',
        'C': 'ᶜ',
        'D': 'ᴰ',
        'E': 'ᴱ',
        'F': 'ᶠ',
        'G': 'ᴳ',
        'H': 'ᴴ',
        'I': 'ᴵ',
        'J': 'ᴶ',
        'K': 'ᴷ',
        'L': 'ᴸ',
        'M': 'ᴹ',
        'N': 'ᴺ',
        'O': 'ᴼ',
        'P': 'ᴾ',
        'Q': 'Q',
        'R': 'ᴿ',
        'S': 'ˢ',
        'T': 'ᵀ',
        'U': 'ᵁ',
        'V': 'ⱽ',
        'W': 'ᵂ',
        'X': 'ˣ',
        'Y': 'ʸ',
        'Z': 'ᶻ',
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
        '+': '⁺',
        '-': '⁻',
        '=': '⁼',
        '(': '⁽',
        ')': '⁾',
        '*': '⁎',
        '#': '♯',
        '@': 'ᵅ',
        '$': '₍₎',
        '&': '⁺',
        '_': '₋',
        '%': '⁻',
        '"': 'ʺ',
        "'": 'ˈ',
        ':': 'ᵕ',
        '/': '⁄',
        '!': 'ⵑ',
        '?': 'ˀ',
        ' ': ' ',
        '.': '˙',
        ',': '‚',
        ';': '؛',
        '(': '⁽',
        ')': '⁾',
        '[': '⁽',
        ']': '⁾',
        '{': '⁽',
        '}': '⁾'
    };

    var superscriptText = '';
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        superscriptText += superscriptChars[char] || char;
    }

    return superscriptText;
}


function convertToSubscript(text) {
    var subscriptChars = {
        'a': 'ₐ',
        'b': '𝒷',
        'c': 'c',
        'd': 'd',
        'e': 'ₑ',
        'f': 'f',
        'g': 'g',
        'h': 'ₕ',
        'i': 'ᵢ',
        'j': 'ⱼ',
        'k': 'ₖ',
        'l': 'ₗ',
        'm': 'ₘ',
        'n': 'ₙ',
        'o': 'ₒ',
        'p': 'ₚ',
        'q': 'q',
        'r': 'ᵣ',
        's': 'ₛ',
        't': 'ₜ',
        'u': 'ᵤ',
        'v': 'ᵥ',
        'w': 'w',
        'x': 'ₓ',
        'y': 'y',
        'z': 'z',
        'A': 'ₐ',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'ₑ',
        'F': 'f',
        'G': 'g',
        'H': 'ₕ',
        'I': 'ᵢ',
        'J': 'ⱼ',
        'K': 'ₖ',
        'L': 'ₗ',
        'M': 'ₘ',
        'N': 'ₙ',
        'O': 'ₒ',
        'P': 'ₚ',
        'Q': 'q',
        'R': 'ᵣ',
        'S': 'ₛ',
        'T': 'ₜ',
        'U': 'ᵤ',
        'V': 'ᵥ',
        'W': 'w',
        'X': 'ₓ',
        'Y': 'y',
        'Z': 'z',
        '0': '₀',
        '1': '₁',
        '2': '₂',
        '3': '₃',
        '4': '₄',
        '5': '₅',
        '6': '₆',
        '7': '₇',
        '8': '₈',
        '9': '₉',
        '+': '₊',
        '-': '₋',
        '=': '₌',
        '(': '₍',
        ')': '₎',
        '*': '₊',
        '#': '#',
        '@': '@',
        '$': '$',
        '&': '₊',
        '_': '₋',
        '%': '₋',
        '"': '"',
        "'": "'",
        ':': 'ₕ',
        '/': '/',
        '!': '!',
        '?': '?',
        ' ': ' ',
        '.': '.',
        ',': ',',
        ';': ';',
        '(': '₍',
        ')': '₎',
        '[': '₍',
        ']': '₎',
        '{': '₍',
        '}': '₎'
    };

    var subscriptText = '';
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        subscriptText += subscriptChars[char] || char;
    }

    return subscriptText;
}



function copyToClipboard(text, notificationElement) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    showNotification(notificationElement, 'success', 'Text copied to clipboard');
}

function showNotification(notificationElement, type, message) {
    notificationElement.innerHTML = message;
    notificationElement.classList.add(type);
    notificationElement.style.display = 'block';

    setTimeout(function() {
        hideNotification(notificationElement);
    }, 2000);
}

function hideNotification(notificationElement) {
    notificationElement.style.display = 'none';
    notificationElement.classList.remove('success');
    notificationElement.classList.remove('error');
}

function generateText() {
    var inputText = document.getElementById('inputText').value;

    if (inputText.trim() === '') {
        showNotification(document.getElementById('nullNotification'), 'error', 'Uh.. Oh.. Masukkan setidaknya 1 teks');
        return;
    }

    var smallCapsOutput = document.getElementById('smallCapsOutput');
    smallCapsOutput.textContent = convertToSmallCaps(inputText);
    document.getElementById('smallCapsNotification').style.display = 'none';

    var superscriptOutput = document.getElementById('superscriptOutput');
    superscriptOutput.textContent = convertToSuperscript(inputText);
    document.getElementById('superscriptNotification').style.display = 'none';

    var subscriptOutput = document.getElementById('subscriptOutput');
    subscriptOutput.textContent = convertToSubscript(inputText);
    document.getElementById('subscriptNotification').style.display = 'none';

    var copyButtons = document.getElementsByClassName('copy-button');
    for (var i = 0; i < copyButtons.length; i++) {
        copyButtons[i].style.display = 'inline-flex';
    }
}

function clearText() {
    var inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        showNotification(document.getElementById('nullNotification'), 'error', 'Uh.. Oh.. Belum ada teks apapun');
        return;
    }

    document.getElementById('inputText').value = '';
    document.getElementById('smallCapsOutput').textContent = '';
    document.getElementById('superscriptOutput').textContent = '';
    document.getElementById('subscriptOutput').textContent = '';

    var copyButtons = document.getElementsByClassName('copy-button');
    for (var i = 0; i < copyButtons.length; i++) {
        copyButtons[i].style.display = 'none';
    }
}


function pasteFromClipboard() {
    navigator.clipboard.readText()
        .then(function(text) {
            document.getElementById('inputText').value = text;
        })
        .catch(function(error) {
            console.error('Error reading text from clipboard:', error);
        });
}
