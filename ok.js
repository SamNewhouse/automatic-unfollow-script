const unfollowMin = 125000;
const unfollowMax = 160000;

// Min max randomiser clock
const clock = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Shuffle array function
const shuffle = (sourceArray) => {
  for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}

// Get list of users
let obj = document.querySelectorAll('li.wo9IH'); 

// Convert object to Array
let array = Object.keys(obj).map((key) => [Number(key), obj[key]]); 
let shuffled = shuffle(array); 

shuffled.forEach((item, index) => {
  setTimeout(()=>{

    // Click unfollow button
    item[1].getElementsByTagName('button')[0].click();

    setTimeout(()=>{

      // Click confirm unfollow
      document.querySelector('.-Cab_').click();

      // Console logs who you've unfollowed
      console.log('Unfollowed: ' + item[1].querySelector('.wFPL8').textContent)

    }, clock(2000, 7000)) // 2 - 7 seconds between clicking confirmation of unfollow.

  }, index * clock(unfollowMin, unfollowMax)) // default: 125 - 160 seconds between clicking unfollow
});

// Minified condensed version:

const unfollowMin=125e3,unfollowMax=16e4,clock=(a,b)=>(a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a)+a)),shuffle=a=>{for(var b=0;b<a.length-1;b++){var c=b+Math.floor(Math.random()*(a.length-b)),d=a[c];a[c]=a[b],a[b]=d}return a};let obj=document.querySelectorAll("li.wo9IH"),array=Object.keys(obj).map(a=>[+a,obj[a]]),shuffled=shuffle(array);shuffled.forEach((a,b)=>{setTimeout(()=>{a[1].getElementsByTagName("button")[0].click(),setTimeout(()=>{document.querySelector(".-Cab_").click(),console.log("Unfollowed: "+a[1].querySelector(".wFPL8").textContent)},clock(2e3,7e3))},b*clock(unfollowMin,unfollowMax))});