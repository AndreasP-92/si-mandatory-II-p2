import cheerio from 'cheerio';
import axios from 'axios';

// downloading the target web page 
// by performing an HTTP GET request in Axios
const axiosResponse = await axios.request({
    method: "GET",
    url: "https://brightdata.com",
})


async function performScaping(){
    
}