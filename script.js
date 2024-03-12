const UpArrow = document.querySelector('.up');

const skillContainer = document.querySelector('.skill_container'),
    skillPeer = document.querySelectorAll('.skill_peer');

// var skillTop =skillSection.offsetTop;
// console.log(skillTop);
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        UpArrow.style.opacity = '1';
        UpArrow.style.pointerEvents = 'all';
    } else {
        UpArrow.style.opacity = '0';
        UpArrow.style.pointerEvents = 'none';
    }

    if (window.scrollY > 800){
        skillContainer.classList.add('active');
    }
})



const lightDark = document.querySelector('.dl_mode');
lightDark.addEventListener('click', () => {
    let body = document.body;
    let dl_icon = document.querySelector('.dl');
    body.classList.toggle("light_mode");
    if (body.classList.contains("light_mode")) {
        dl_icon.name = 'moon';
    }
    else {
        dl_icon.name = 'sunny';
    }
})

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});
const successicn = document.querySelector('.icn');
const successmsg = document.querySelector('.success_msg');
const conForm = document.getElementById('form_container');
conForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log("Button clicked!");
    // EmailJS Send Function
    emailjs.send('service_q7avzw9', 'template_qe5bx8p', {
        user_name: document.querySelector('#user_name').value,
        user_email: document.querySelector('#user_email').value,
        message: document.querySelector('#message').value
    }, 'Fba-CgXAgYaLVZ7we')
        .then((result) => {
            /* If you want to see the response in an alert then uncomment below lines */
            // alert("Sent!")
            successicn.name = 'checkmark-circle';
            successmsg.innerHTML = 'Sent Successfully...';
            successicn.style.opacity = '1';
            successmsg.style.opacity = '1';
            setTimeout(() => {
                successicn.style.opacity = '0';
                successmsg.style.opacity = '0';
            }, 3000);
            conForm.reset();
        }, (error) => {
            // alert("Error Occured while Sending your Message.")
            successicn.name = 'close-circle';
            successmsg.innerHTML = 'Failed to Send Message...';
            successicn.style.opacity = '1';
            successmsg.style.opacity = '1';
            setTimeout(() => {
                successicn.style.opacity = '0';
                successmsg.style.opacity = '0';
            }, 3000);
            console.log(error.toString());
        });
});

const menuclsToggle = document.querySelector('.toggle_icon'),
    navMenu = document.querySelector('.navbar_small'),
    navMenuItems = document.querySelectorAll('.navbar_small .nav_items .nav_item');
menuclsToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show_menu');
    if (navMenu.classList.contains('show_menu')){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'scroll';
    }
    
})

navMenuItems.forEach(elem => elem.addEventListener('click', () => {
                navMenu.classList.remove('show_menu');
                document.body.style.overflow = 'scroll';
}));

