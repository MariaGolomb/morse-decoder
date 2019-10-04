const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
     let first=0;
    let last=10;
    let res='';
    while (last<=expr.length){
        let letter=expr.slice(first, last);
        first+=10;
        last+=10;
        if(letter==='**********'){
             res+=' ';
        } else {
            let resRevLetter='';
            let i=letter.length;
            let smb=letter.slice(i-2, i);
            while (smb!=="00" && i>0){
                if(smb==='10'){
                    smb='.'
                } else if(smb==='11'){
                    smb='-'
                }
                resRevLetter+=smb;
                i-=2;
                smb=letter.slice(i-2, i);
            }

            res+=MORSE_TABLE[resRevLetter.split('').reverse().join('')];
            
        }

    }


    return res;

}

module.exports = {
    decode
}
