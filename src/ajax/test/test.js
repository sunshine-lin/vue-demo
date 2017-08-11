/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-07 15:24:20
 * @version $Id$
 */
import axios from 'axios'
/*
* 获取测试数据
*/
function getTestData (param) {
  	return axios.post('/hospdepartroom/getHospDepartmentList',{})
}
export default {
  getTestData
}

