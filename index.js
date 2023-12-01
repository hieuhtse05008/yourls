function setState(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function getState(key) {
    return JSON.parse(localStorage.getItem(key));
}

function render(key) {
    let tab = data[key];
    let container = document.getElementById("content");
    container.appendChild
}


const { createApp } = Vue
const defaultTabs = [
    {
        key: 'rents', name: 'Rents',
        items: [
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20ct1%20a10&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20g4&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20hh2&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20a14&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20n09&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b10a&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b10b&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b11a&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b11b&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20a6a&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20a6b&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20a6c&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20a6d&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b3a&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b3b&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b3c&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20b3d&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20c3a%20nam%20trung%20y%C3%AAn&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20ct2a%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20ct2b%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20ct1%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20ct2%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20CT3%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            { url:"https://www.facebook.com/search/posts?q=thu%C3%AA%20CT4%20m%E1%BB%85%20tr%C3%AC%20h%E1%BA%A1&filters=eyJyZWNlbnRfcG9zdHM6MCI6IntcIm5hbWVcIjpcInJlY2VudF9wb3N0c1wiLFwiYXJnc1wiOlwiXCJ9In0%3D", count:0},
            // { url:"", count:0},

        ]
    },
    { key: 'others', name: 'Others' , items:[]},
]
createApp({
    mounted() {
        window.addEventListener('keydown', (e) => {
            if (e.key == "ArrowRight") {
                this.next();
            }
        });
    },
    computed:{
        items(){
            return this.currentTab.items.sort((a,b)=>a.count > b.count ? 1 : -1);
        }

    },
    methods:{
        activeTab(tab){
            console.log(this.currentTab,tab);
            this.currentTab = tab;
        },
        next(){
            window.open(this.items[0].url, '_blank').focus();
            this.count(0);

        },
        openAll(){
            this.items.forEach((e,i)=>{
                setTimeout(()=>{
                    window.open(this.items[i].url, '_blank');
                },i*1000);
            });
        },
        count(index){
            this.tabs = this.tabs.map(t=>{
                if(t.key == this.currentTab.key){
                    t.items = t.items.map((e,i)=> i==index ?{...e,count:e.count+1} : e);
                    this.currentTab = t;
                }

                return t;
            });
        },
    },
    data() {
        return {
            tabs: defaultTabs,
            currentTab: defaultTabs[0],
            active: 'rents',
        }
    }
}).mount('#app');
