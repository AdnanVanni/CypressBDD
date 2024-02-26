import {Reporter} from '@playwright/test/reporter'
import * as fs from 'fs'

class MyReporter implements Reporter{
    onBegin(config, suite){
        console.log(`execution of ${suite.allTests().length} test case/s`);
    }

    onEnd(result) {
        console.log(`Status Execution finished with status of ${result.status}`);
    }
    onTestBegin(test) {
        console.log(`Executing of ${test.title} started.`);
    }
    
onTestEnd(test,result) {
    const execTime=result.duration
    const data= {
        test: test.title,
        status:result.status,
        executionTime:execTime,
        erros:result.erros,
    };
    const dataToString=JSON.stringify(data,null, 2)
    console.log(`data is as follows = ${dataToString}`);
    fs.writeFileSync("test-result.json",dataToString)
    }
}
export default MyReporter;