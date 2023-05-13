//Utility functions
function get(element){
    return document.getElementById(element);
}
    var gifts = ['a red wig!', 'eyelashes!', 'a red dress!', 'cocktails!'];
//Application functions
function openModal(){
    var modal= get('modal-dialog');
    var backdrop = get('modal-backdrop');

    var listGift = get('list-gift');
    
    var giftsText = '';

    for(let i=0; i < gifts.length; i++){
        giftsText += gifts[i];
        if(i < gifts.length - 1){
            giftsText += ', '
        }
    }
    listGift.textContent = giftsText;



    modal.classList.add('visible');
    backdrop.classList.add('visible');
}
function closeModal(){
    var dragQueenBook = get('edit-content-text-book');
    var textWhen = get('edit-content-text-when');
    var textWhere = get('edit-content-text-where');
    var textOccasion = get('edit-content-text-occasion');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //Clear text
    dragQueenBook.value = '';
    textWhen.value = '';
    textWhere.value = '';
    textOccasion.value = '';

    //Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){

    var dragQueenBook = get('edit-content-text-book');
    var textWhen = get('edit-content-text-when');
    var textWhere = get('edit-content-text-where');
    var textOccasion = get('edit-content-text-occasion');
    var textGift = get('surprise-gift');
    var content = get('display-content');

    var newContent = document.createElement('p');

    //Get random number to choose a gift
    function giftWin() {
        var giftMessage = ["Awesome! That's so hot",
        "You will have fun! Everyone will look at you on the streets",
        "Great! You will as sexy as Jessica Rabbit",
        "Have a great show! but don't get extremely drunk (or maybe you should, just kidding)"];
        var giftNumber = Math.floor(Math.random() * gifts.length);

        return 'You will get ' +  gifts[giftNumber] + ' ' + giftMessage [giftNumber];
    }

    
    var newContentTextBook= document.createTextNode(dragQueenBook.value + ' ★ ');
    var newContentTextWhere= document.createTextNode(textWhen.value + ' ★ ');
    var newContentTextWhen= document.createTextNode(textWhere.value +  ' ★ ');
    var newContentTextOccasion= document.createTextNode(textOccasion.value +  ' ★ ' +  giftWin());

    //Add elements
    newContent.appendChild(newContentTextBook);
    newContent.appendChild(newContentTextWhere);
    newContent.appendChild(newContentTextWhen);
    newContent.appendChild(newContentTextOccasion);

    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function(){
var newButton = get('book-button');
var cancelButton = get('cancel-button');
var saveButton = get('save-button');

newButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', saveContent);
});