let loginLink = document.getElementById("login-link");
loginLink.addEventListener('click', function(){
    loginLink.setAttribute('href' , './login.html');
});

function renderDocs(docs) {
  let container = document.getElementById("docs-stuff");
  const docsHTML = docs
    .map(
      doc =>
        `<div class="row w-100 each-doc flex-display docy" id="${doc.id}">
                        <a class="row col-11 flex-display" style="flex-direction: row; max-width: 58.33%; flex-basis: 58.33%; padding: 8px;">
                            <div class="col-3" style="padding-left: 16px; max-width: 25%; flex-basis: 25%;">
                                <img style="width: 75px; height: 75px; border-radius: 50%;" src="${doc.avatar}">
                            </div>
                            <div class="col-9 doc-title" style="max-width: 75%; flex-basis: 75%;">
                                <h5>
                                    ${doc.name}
                                </h5>
                                <h6>
                                    ${doc.spec}
                                </h6>
                                <div style="margin-bottom: 5%; margin-top: 2%;">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span style="color: #6e7794; font-size: 10px;">${doc.comments} نظر</span>
                                </div>
                                <p>
                                    ${doc.comment_text}
                                </p>
                            </div>
                        </a>
                        <div class="col-12 flex-display full-width" style="flex-direction: column; flex-basis: 41.66%;">
                            <a>
                                <div class="doc-details">
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-map-pin" data-v-50fd7d5a=""><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-v-50fd7d5a=""></path><circle cx="12" cy="10" r="3" data-v-50fd7d5a=""></circle></svg>
                                            <span>
                                                    ${doc.location}
                                            </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-book" data-v-50fd7d5a=""><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-v-50fd7d5a=""></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-v-50fd7d5a=""></path></svg>
                                            <span>
                                                تجربه کاری ${doc.experience_years} سال
                                            </span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-20 feather feather-thumbs-up" data-v-50fd7d5a=""><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" data-v-50fd7d5a=""></path></svg>
                                            <span>
                                                ${doc.user_percent} درصد رضایت کاربران
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                            <div style="margin-top: 2%;">
                                <div class="flex-display" style="justify-content: space-between; align-items: center;">
                                    <button class="app-get-btn" style="display: flex; align-items: center; width: 75%;">
                                            <div style="position: inherit; display: inline; padding: 2%;">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left text-white " data-v-bc20ae4e=""><line x1="19" y1="12" x2="5" y2="12" data-v-bc20ae4e=""></line><polyline points="12 19 5 12 12 5" data-v-bc20ae4e=""></polyline></svg>
                                            </div>
                                            <div style="position: inherit; display: inline; margin-right: 35%;">
                                                نوبت بگیر!
                                            </div>
                                    </button>
                                    <span class="like-span">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon feather feather-heart text-water-blue" data-v-50fd7d5a=""><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-50fd7d5a=""></path></svg>
                                    </span>
                                </div>
                                <p style="color: #4dcc6b; text-align: center; margin-top: 2%; font-size: 14px;">
                                    اولین نوبت خالی ${doc.first_empty_date}
                                </p>
                            </div>
                        </div>
                    </div>`
        
    )
    .join('');

  container.innerHTML= docsHTML;
  listOfDocs = container.querySelectorAll(".docy");
  for (let x=0; x < listOfDocs.length; x++){
      listOfDocs[x].addEventListener('click', function(){
          location.href = "./doctor.html";
          let myId = listOfDocs[x].getAttribute('id');
          localStorage.setItem('id', myId);
          
  });
  }
}

let doctors = [];
fetch("https://intense-ravine-40625.herokuapp.com/doctors")
.then(res => res.json())
.then(result => {
    doctors = result;
    renderDocs(doctors);
});

let sortItem1 = document.getElementById("sort-best");
let sortItem2 = document.getElementById("sort-userpercent");
let sortItem3 = document.getElementById("sort-firstdate");
sortItem1.addEventListener('click', function(){
    sortItem1.className += ' active';
    sortItem2.className = 'nav-link';
    sortItem3.className = 'nav-link';
    doctors.sort(function(a, b){
        return a.id - b.id;
    });
    renderDocs(doctors);
});

sortItem2.addEventListener('click', function(){
    sortItem1.className = 'nav-link';
    sortItem3.className = 'nav-link';
    sortItem2.className += ' active';
    doctors.sort(function(a, b){
        return b.user_percent - a.user_percent ;
    });
    renderDocs(doctors);
});
