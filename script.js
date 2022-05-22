(function(){

    'use strict';

    const detailsForm=document.querySelector('#destinations_details_form');
    detailsForm.addEventListener('submit', handleFormSubmit)

    function handleFormSubmit(evt){
        evt.preventDefault();
        const destName=evt.target.elements['name'].value;
        const destLocation=evt.target.elements['location'].value;
        const destPhoto=evt.target.elements['photo'].value;
        const destDesc=evt.target.elements['description'].value;

        for(let i=0; i<detailsForm.length; i++){
            detailsForm.elements[i].value="";
        }

        const destCard=createDestionationCard(destName, destLocation,destPhoto,destDesc);

        const wishListContainer=document.querySelector('#destionation_container');
        if(wishListContainer.children.length==0){
            document.querySelector('#title').innerHTML="My Wish List";
        }

        wishListContainer.appendChild(destCard);
    }

    function createDestionationCard(name,location,photoURL,description){
        const card=document.createElement("div");
        card.className='card';

        const img=document.createElement('img');
        img.setAttribute('alt',name);

        const constatntPhotoUrl='images/signpost.jpg';

        if(photoURL.length===0){
            img.setAttribute('src',constatntPhotoUrl);
        }else{
            img.setAttribute('src',photoURL);
        }

        card.appendChild(img);

        const cardBody=document.createElement('div');
        cardBody.className='card-body';

        const cardTitle=document.createElement('h3');
        cardTitle.innerText=name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle=document.createElement('h4');
        cardSubtitle.innerHTML=location;
        cardBody.appendChild(cardSubtitle);

        if(description.length!==0){
            const cardText=document.createElement('p');
            cardText.className='card-text';
            cardText.innerText=description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn=document.createElement('button');
        cardDeleteBtn.innerText="Remove";
        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(evt){
        const card=evt.target.parentElement.parentElement;
        card.remove();
    }
})();