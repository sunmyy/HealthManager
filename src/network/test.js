import axios from "axios";

axios({
  url:'222.24.63.60:8081/index/noticeNameList'
}).then(res => {
  console.log(res);
})