// Featured Destinations start
let featuredDestinationsArrays=[
    {
        image:'https://i.ibb.co/S5BPgJv/Rectangle-181.png',
        description:'Stopover opportunity in İstanbul with Turkish Airlines'
     },
     {
        image:'https://i.ibb.co/jksMM4c/Rectangle-18-22.png',
        description:'Discover the timeless city with Touristanbul of Turkish Airlines'
     },
     {
        image:'https://i.ibb.co/jksMM4c/Rectangle-18-22.png',
        description:'The best of Abu Dhabi with exclusive Etihad Airways!'
     }
]

let featuredDestinations=document.getElementById('featured-Destinations')
featuredDestinations.classList='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
featuredDestinationsArrays.forEach((featuredDestinationsArray)=>{
    let div=document.createElement('div')
    div.classList='h-[350px] w-[370px] p-2 Poppins font-bold gap-4 bg-[#ffffff] mx-auto'
    div.innerHTML=`
    <img src='${featuredDestinationsArray.image}' >
    <h2 class='ml-4'>${featuredDestinationsArray.description}</h2>
    <div class='text-center'>
    <button class='font-medium bg-[#ffb700] h-8 w-[201px]'>View More</button>
    </div>
    `
    featuredDestinations.appendChild(div)
})
//Featured Destinations end

//Deals and Offers start
let dealsAndOffersArray=[
    {
        image:'https://i.ibb.co/L0rcXSD/slider-Up-to-14-discount-on-Domestic-flights-2.png',
        title:'With bkash payment only',
        descriptions:'up to 14% discount on the base fare of domestic flights'
    },
    {
        image:'https://i.ibb.co/nQvVLgP/slider-Up-to-14-discount-on-Domestic-flights-2-1.png',
        title:'With bkash payment only',
        descriptions:'up to 14% discount on the base fare of domestic flights'
    },
    {
        image:'https://i.ibb.co/VYmKQwd/slider-Up-to-14-discount-on-Domestic-flights-2-2.png',
        title:'With bkash payment only',
        descriptions:'up to 14% discount on the base fare of domestic flights'
    }
]

let dealsAndOffer=document.getElementById('dealsAndOffer')
dealsAndOffersArray.forEach((dealsAndOffers)=>{
    let div=document.createElement('div')
    div.classList='flex bg-white w-96 h-28 mx-auto'
    div.innerHTML=`
       <div>
       <img src='${dealsAndOffers.image}'>
       </div>
       <div>
       <h2 class='text-[#09182e] font-medium text-x5'>${dealsAndOffers.title}</h2>
       <h2 class='text-[#006ce4] font-semibold text-x5'>${dealsAndOffers.descriptions}</h2>
       </div>
    `
    dealsAndOffer.appendChild(div)
})
//Deals and Offers end

//Popular Airlines start
let popularAirlinesArray=[
    {image:'https://i.ibb.co/cwcN2Pf/BBA.png',title:'Biman Bangladesh Airlines',star:'https://i.ibb.co/2YS4TTQ/star.jpg',starNumber:'4',review:'( 783 review )'},
    {image:'https://i.ibb.co/7zSLQSD/Emirates.png',title:'Emirates',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/LQWnhqG/Turkish-Airlines.png',title:'Turkish Airlines',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/mGgLxn6/Malaysia.png',title:'malaysia Airlines',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/Kxbw1NP/Singapore-Airlines.png',title:'Singapore Airlines',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/mGgLxn6/Malaysia.png',title:'malaysia Airlines',star:'',starNumber:'3',review:'( 753 review )'},
    {image:'https://i.ibb.co/cwcN2Pf/BBA.png',title:'Biman Bangladesh Airlines',star:'',starNumber:'4',review:'( 753 review )'},
    {image:'https://i.ibb.co/kXKR2KX/american.png',title:'american airlines',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/7zSLQSD/Emirates.png',title:'Emirates',star:'',starNumber:'5',review:'( 953 review )'},
    {image:'https://i.ibb.co/cwcN2Pf/BBA.png',title:'Biman Bangladesh Airlines',star:'',starNumber:'4',review:'( 753 review )'},
    {image:'https://i.ibb.co/mGgLxn6/Malaysia.png',title:'malaysia Airlines',star:'',starNumber:'5',review:'( 753 review )'},
    {image:'https://i.ibb.co/LQWnhqG/Turkish-Airlines.png',title:'Turkish Airlines',star:'',starNumber:'5',review:'( 753 review )'},
]

let popularAirline=document.getElementById('popularAirline')
popularAirlinesArray.forEach((popularAirlines)=>{
    let div=document.createElement('div')
    div.classList='w-[231px] flex gap-4 mb-6 mx-auto'
    div.innerHTML=`
    <div>
    <img src='${popularAirlines.image}'>
    </div>

    <div>
    <h2 class='text-[#006ce4]'>${popularAirlines.title}</h2>
    <div class='flex Poppins font-light text-xs gap-2'>
    <img src='https://i.ibb.co/2YS4TTQ/star.jpg' class='w-[14px]'>
    <p class='text-[] '>${popularAirlines.starNumber}</p>
    <p>${popularAirlines.review}</p>
    </div>
    </div>
    `
  popularAirline.appendChild(div)
})
//Popular Airlines end

//Testimonials start

//Testimonials end