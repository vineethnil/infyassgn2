import React from 'react';
import './main.css';
import XLSX from 'xlsx';
import moment from 'moment';

class Upload extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			tabledata:{}
		};
		this.fileHandler = this.fileHandler.bind(this);
	}


	//handle file change
	fileHandler(e){
		e.preventDefault();
		var that =this;

		// reading file
		let fileObj = e.target.files[0];
		var reader = new FileReader();
		reader.onload = function (e) {

			// getting data from the file
	        var data = e.target.result;
	        let readedData = XLSX.read(data, {type: 'binary'});
	        const wsname = readedData.SheetNames[0];
	        const ws = readedData.Sheets[wsname];
	        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});

        	//filtering out empty data from the array
        	let finalarray = [];
			for (var i = 0; i<dataParse.length;i++) {
				let filtered = dataParse[i].filter(function (el) {
				  return el != null;
				});
				if(filtered.length>0){
					finalarray.push(filtered)
				}
			}

        	// create json for table data
        	var tablecontent = {};
        	for (var j = 0;j<finalarray.length;j++) {
        		if(finalarray[j].includes("Name")){
        			let thisarray = finalarray[j];
        			tablecontent["Name"]=thisarray[thisarray.indexOf("Name")+1];
        		}
        		if(finalarray[j].includes("Registration date")){
        			let thisarray = finalarray[j];
        			tablecontent["Registration date"]=moment(thisarray[thisarray.indexOf("Registration date")+1]).format('DD-MM-YYYY');
        		}
        		if(finalarray[j].includes("a2")){
        			let thisarray = finalarray[j];
        			tablecontent["a2"]=thisarray[thisarray.indexOf("a2")+1];
        		}
        		if(finalarray[j].includes("b2")){
        			let thisarray = finalarray[j];
        			tablecontent["b2"]=thisarray[thisarray.indexOf("b2")+1];
        		}
        	}

        	// setting state value
        	that.setState({
        		tabledata:tablecontent
        	})
	    };
	    reader.readAsBinaryString(fileObj);
	}
	

	render() {

		// mapping throu the content
		const tablecontentraw = this.state.tabledata;
		const tablerow = Object.keys(tablecontentraw).map((item, i) => (
			<tr key={i}>
               <td>{item}</td>
               <td>{tablecontentraw[item]}</td>
            </tr>
	    ))	
		return (
			<div id="outer_cntr">	
				<input type="file" onChange={this.fileHandler}/>
				<table id="upload">
	               <tbody>
	                  {tablerow}
	               </tbody>
	            </table>
			</div>
		);
	}

}
export default Upload