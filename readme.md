# Automated randomised unfollow script

Unfollow everyone automatically at random intervals, in a random order.

## Dependencies

Chrome version => 49

## Setup

1. Go to profile
2. Open developer tools console (Command+Option+J // Control+Shift+J)
3. (**Optional**) Toggle device tool (Command+Shift+M // Control+Shift+M) 
   - Choose any mobile device
   - Refresh page (F5 // Command+R // Ctrl+R) to activate device view
4. Go to the 'following' tab
5. Scroll to the bottom to reveal all the accounts you're following
6. Copy and paste the code below into the Chrome Console
7. Enjoy 🥳🎉

## Usage

```javascript
const unfollowMin=125e3,unfollowMax=16e4,clock=(a,b)=>(a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a)+a)),shuffle=a=>{for(var b=0;b<a.length-1;b++){var c=b+Math.floor(Math.random()*(a.length-b)),d=a[c];a[c]=a[b],a[b]=d}return a};let obj=document.querySelectorAll("li.wo9IH"),array=Object.keys(obj).map(a=>[+a,obj[a]]),shuffled=shuffle(array);shuffled.forEach((a,b)=>{setTimeout(()=>{a[1].getElementsByTagName("button")[0].click(),setTimeout(()=>{document.querySelector(".-Cab_").click(),console.log("Unfollowed: "+a[1].querySelector(".wFPL8").textContent)},clock(2e3,7e3))},b*clock(unfollowMin,unfollowMax))});
```

## More information

Unfollow limit: 700\
Milliseconds in 24 hours: 86400000\
86400000 / 700 = 123428.571429\
Add a bit of fat to avoid exceeding limit due to random clock.\
123428 + 1572 = 125000\
Minimum of 125000 milliseconds(125 seconds) to stay within 24 hour restrictions.\

Timeouts have been put in place to prevent script detection.

## Default values:

#### unfollowMin = 125000 (125 seconds)
#### unfollowMax = 160000 (160 seconds)

*These values can be changed to meet your needs/restrictions.*