let docId = localStorage.getItem('id');
fetch(`https://intense-ravine-40625.herokuapp.com/doctors/${docId}`)
.then(res => res.json())
.then(result => {
    renderDocDet(result);
});

function renderDocDet(result){
    document.getElementById("name-of-spec-nav").innerHTML = result.spec;
    document.getElementById("spec-in-card").innerHTML = result.spec;
    document.getElementById("name-of-doc-nav").innerHTML = " آقای دکتر " + result.name;
    document.getElementById("name-of-doc-in-card").innerHTML = result.name;
    document.getElementById("avatar-of-doc").setAttribute('src', result.avatar);
    document.getElementById("nezam-number").innerHTML =  "شماره نظام پزشکی " + result.number;
    document.getElementById("exper").innerHTML = " سال" + result.experience_years;
    document.getElementById("free-date").innerHTML = result.first_empty_date;
    if(result.online_pay == true){
        document.getElementById("online-pay").innerHTML = "دارد";
    }
    else {
       document.getElementById("online-pay").innerHTML = "ندارد"; 
    }
    document.getElementById("rate").innerHTML = result.rate;
    document.getElementById("comments-num").innerHTML = " از " + result.comments + " نظر";
    document.getElementById("commenter").innerHTML = " نظر " + result.commenter;
    document.getElementById("comment-text").innerHTML = result.comment_text;
    document.getElementById("address").innerHTML = result.address;
    document.getElementById("phonenumber").innerHTML = result.phone;
    
    
    let week_list = document.getElementById("week-list");
    let sat = document.createElement("li");
    let day1 = document.createElement("h5");
    day1.innerHTML = "شنبه"
    let check1 = document.createElement("span");
    if(result.week_days[0] == true){
        check1.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check1.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    sat.append(day1);
    sat.append(check1);
    let sun = document.createElement("li");
    let day2 = document.createElement("h5");
    day2.innerHTML = "یکشنبه"
    let check2 = document.createElement("span");
    if(result.week_days[1] == true){
        check2.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check2.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    sun.append(day2);
    sun.append(check2);
    let mon = document.createElement("li");
    let day3 = document.createElement("h5");
    day3.innerHTML = "دوشنبه"
    let check3 = document.createElement("span");
    if(result.week_days[2] == true){
        check3.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check3.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    mon.append(day3);
    mon.append(check3);
    let tue = document.createElement("li");
    let day4 = document.createElement("h5");
    day4.innerHTML = "سه شنبه"
    let check4 = document.createElement("span");
    if(result.week_days[3] == true){
        check4.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check4.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    tue.append(day4);
    tue.append(check4);
    let wed = document.createElement("li");
    let day5 = document.createElement("h5");
    day5.innerHTML = "چهارشنبه"
    let check5 = document.createElement("span");
    if(result.week_days[4] == true){
        check5.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check5.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    wed.append(day5);
    wed.append(check5);
    let thu = document.createElement("li");
    let day6 = document.createElement("h5");
    day6.innerHTML = "پنجشنبه"
    let check6 = document.createElement("span");
    if(result.week_days[5] == true){
        check6.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check6.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    thu.append(day6);
    thu.append(check6);
    let fri = document.createElement("li");
    let day7 = document.createElement("h5");
    day7.innerHTML = "جمعه"
    let check7 = document.createElement("span");
    if(result.week_days[6] == true){
        check7.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-dark-mint feather feather-check"><polyline data-v-723181de="" points="20 6 9 17 4 12"></polyline></svg>`;
    }
    else {
        check7.innerHTML = `<svg data-v-723181de="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary feather feather-x"><line data-v-723181de="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-723181de="" x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    fri.append(day7);
    fri.append(check7);
    week_list.append(sat);
    week_list.append(sun);
    week_list.append(mon);
    week_list.append(tue);
    week_list.append(wed);
    week_list.append(thu);
    week_list.append(fri);
    let week_container = document.getElementById("week-container");
    week_container.append(week_list);
}