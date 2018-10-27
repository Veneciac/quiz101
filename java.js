
var obj = [
  {'pertanyaan': "Is 4x4 =16?" , hasil:'yes'},
  {'pertanyaan': "Do you feel alone?" , hasil:'no'},
  {'pertanyaan': "Do you feel watched?" , hasil:'yes'},
  {'pertanyaan': " In 1386 a pig in France was executed by public hanging for the murder of a child?" , hasil:'yes'},
  {'pertanyaan': "Do honey spoils?" , hasil:'no'},
  {'pertanyaan': "Cherophobia is the fear of fun." , hasil:'yes'},
  {'pertanyaan': "Cats have 15 muscles in each of their ears." , hasil:'no'},
  {'pertanyaan': "Birds don’t urinate." , hasil:'yes'},
  {'pertanyaan': "Female ostrich can roar just like a lion." , hasil:'no'},
  {'pertanyaan': "The name “Indonesia” is derived from the Latin word Indus." , hasil:'yes'},
  {'pertanyaan': "Mr. Abdurrahman Wahid is the one who formed the movement called West Pacific Forum." , hasil:'yes'},
  {'pertanyaan': "Vancouver is Canada's capital." , hasil:'no'},
  {'pertanyaan': "Sun rises in the west in Venus." , hasil:'yes'},
  {'pertanyaan': "Indonesia has the largest Muslim population in the world" , hasil:'yes'},
  {'pertanyaan': "Difteri virus causes bleeding in the body due to the destruction of blood vessels" , hasil:'no'},
  {'pertanyaan': "Jakarta’s Gelora Bung Karno Stadium is second largest stadium in the world." , hasil:'yes'},
  {'pertanyaan': "Formosa is the old name of Taiwan." , hasil:'yes'},
  {'pertanyaan': "Sumatra is the tenth largest island in the world." , hasil:'no'},
  {'pertanyaan': "A moon of Jupiter is Ganymede." , hasil:'yes'},
  {'pertanyaan': "Indonesia became the first developing country to operate their own domestic satellite system." , hasil:'yes'},
  {'pertanyaan': "Stephen Hawking wrote ‘A Brief History of Life’" , hasil:'no'},
  {'pertanyaan': "‘Hey You’ is a computer virus." , hasil:'yes'},
  {'pertanyaan': "World’s coldest desert Gobi belongs to China." , hasil:'no'}
]
var jawaban ;

function randomQues(){
  var random = Math.floor(Math.random()*(obj.length))
  jawaban = obj[random].hasil
  document.getElementById('soal').innerText = obj[random].pertanyaan
  
}


function cekJawaban(str){
  if(str === jawaban ){
    document.getElementById('gambar').src = 'congratz.jpg' 
    alert('YEAY ANDA BENAR!')
    return randomQues()
  }else{
    document.getElementById('gambar').src = 'ghost1.jpg'
    alert('BAHAHA ANDA SALAH!')
    return randomQues()

  }
}

function tutup(){
  document.getElementById('gambar').src = ''

}
// document.getElementById()