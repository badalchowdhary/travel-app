import React from "react";
import { useLocation } from "react-router-dom";

//importing database
import { sample_db_0km } from "../data/sample_db_0km";
import { sample_db_5km } from "../data/sample_db_5km";
import { sample_db_10km } from "../data/sample_db_10km";
import { sample_db_15km } from "../data/sample_db_15km";
import { sample_db_20km } from "../data/sample_db_20km";
import { sample_db_25km } from "../data/sample_db_25km";




const ModeChoice = () => {
    const location = useLocation();
    const QuestionResponse = location.state
    console.log(QuestionResponse);

    //selecting database as per the response in Q2
    let sampleData;
    if (QuestionResponse.distance === "<5km") {
        sampleData = sample_db_0km;
    } else if (QuestionResponse.distance === "5-10km") {
        sampleData = sample_db_5km;
    } else if (QuestionResponse.distance === "10-15km") {
        sampleData = sample_db_10km;
    } else if (QuestionResponse.distance === "15-20km") {
        sampleData = sample_db_15km;
    } else if (QuestionResponse.distance === "20-25km") {
        sampleData = sample_db_20km;
    } else if (QuestionResponse.distance === ">25km") {
        sampleData = sample_db_25km;
    }

    //mode 1
    let mode1 = {
        mode_name: "Bus Type 1",
        mode_attr: "mode_1",
    }

    //mode2
    let mode2 = {
        mode_name: "Bus Type 2",
        mode_attr: "mode_2"
    }

    //mode 3
    let mode3;
    if (QuestionResponse.distance === "<5km") {
        mode3 = {
            mode_name: "Walk / Bicycle",
            mode_attr: "mode_4"
        };
    } else {
        mode3 = {
            mode_name: "Metro",
            mode_attr: "mode_4"
        };
    }

    //mode 4
    let mode4;
    if (QuestionResponse.travelMode === 'Own Two-wheeler') {
        mode4 = {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9"
        };
    } else if (QuestionResponse.travelMode === 'Own Car') {
        mode4 = {
            mode_name: "Own Car",
            mode_attr: "mode_8"
        };

    } else {
        // Randomly pick between 'Own Car' and 'Own Two-wheeler'
        mode4 = Math.random() < 0.5 ? {
            mode_name: "Own Car",
            mode_attr: "mode_8"
        } : {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9"
        };
    }

    //mode 5
    let mode5;
    if (QuestionResponse.travelMode === 'Auto') {
        mode5 = {
            mode_name: "Auto",
            mode_attr: "mode_7"
        };
    } else if (QuestionResponse.travelMode === 'App based ride hailing cab services including Ola / Uber') {
        mode5 = {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5"
        };
    } else {
        // Randomly pick between 'Auto' and 'Ride hailing cab services'
        mode5 = Math.random() < 0.5 ? {
            mode_name: "Auto",
            mode_attr: "mode_7"
        } : {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5"
        };
    }

    //function to get the status of the crowd
    function getCrowdStatus(crowdLevel) {
        const crowd_json = {
            1: "Many seats available",
            2: "Some seats available",
            3: "All seats occupied, standing space available",
            4: "Fully crowded or packed"
        };
        return crowd_json[crowdLevel];
    }

    //function to get the icon as per the crowd
    function getCrowdIcon(crowdLevel) {
        const crowd_json = {
            1: <i class="material-icons">chair</i> ,
            2: <i class="material-icons">group</i> ,
            3: <i class="material-icons">groups emoji_people</i> ,
            4: <i class="material-icons">groups groups groups</i>  
        };
        return crowd_json[crowdLevel];
    }
    

    //function to get the service type
    function getServiceType(serviceType) {
        const servtype_json = {
            1: "Ordinary",
            2: "Express Non-AC",
            3: "Express AC",
        };
        return servtype_json[serviceType];
    }

    //function to get the icon as per the service
    function getServiceIcon(serviceType) {
        const servtype_json = {
            1: <i class="material-icons">event_seat</i> ,
            2: <i class="material-icons">airline_seat_recline_extra</i> ,
            3: <i class="material-icons">airline_seat_recline_extra, ac_unit</i> 
        };
        return servtype_json[serviceType];
    }


    return (
        <div className="main-container" data-aos="fade-up">
            <div className="page-heading">
            <h1>Mode Choice</h1>

            </div>
           

            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td><input type="radio" name="mode" value="{mode1.mode_name}" />{mode1.mode_name}</td>
                        <td><input type="radio" name="mode" value="{mode1.mode_name}" /> {mode2.mode_name}</td>
                        <td><input type="radio" name="mode" value="{mode1.mode_name}" /> {mode3.mode_name}</td>
                        <td><input type="radio" name="mode" value="{mode1.mode_name}" /> {mode4.mode_name}</td>
                        <td><input type="radio" name="mode" value="{mode1.mode_name}" /> {mode5.mode_name}</td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up"> Total travel time spent while inside the vehicle(s)</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td><i class="material-icons">directions_bus</i> <br/>{sampleData[0][mode1.mode_attr + '_ivtt']} min</td>
                        <td><i class="material-icons">directions_bus</i> <br/>{sampleData[0][mode2.mode_attr + '_ivtt']} min</td>
                        <td><i class="material-icons">subway</i> <br/>{sampleData[0][mode3.mode_attr + '_ivtt']} min</td>
                        <td><i class="material-icons">drive_eta</i> <br/>{sampleData[0][mode4.mode_attr + '_ivtt']} min</td>
                        <td><i class="material-icons">local_taxi</i> <br/>{sampleData[0][mode5.mode_attr + '_ivtt']} min</td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up"> Total travel time spent outside vehicle(s)</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td>{sampleData[0][mode1.mode_attr + '_walktime'] + sampleData[0][mode1.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode2.mode_attr + '_walktime'] + sampleData[0][mode2.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode3.mode_attr + '_walktime'] + sampleData[0][mode3.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode4.mode_attr + '_walktime'] + sampleData[0][mode4.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode5.mode_attr + '_walktime'] + sampleData[0][mode5.mode_attr + '_waittime']} min</td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up"> Possible delay due to traffic congestion or other uncertainties</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td>..up to {sampleData[0][mode1.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode2.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode3.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode4.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode5.mode_attr + '_tvariab']} min more</td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up">Total one-way cost of travel</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td>Rs. {sampleData[0][mode1.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode2.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode3.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode4.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode5.mode_attr + '_tcost']}</td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up">Extent of crowding in the vehicle</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td>{getCrowdIcon(sampleData[0][mode1.mode_attr + '_crowd'])} <br/> {getCrowdStatus(sampleData[0][mode1.mode_attr + '_crowd'])}</td>
                        <td>{getCrowdIcon(sampleData[0][mode2.mode_attr + '_crowd'])} <br/> {getCrowdStatus(sampleData[0][mode2.mode_attr + '_crowd'])}</td>
                        <td>{getCrowdIcon(sampleData[0][mode3.mode_attr + '_crowd'])} <br/> {getCrowdStatus(sampleData[0][mode3.mode_attr + '_crowd'])}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h2 data-aos="fade-up">Service type</h2>
            <table data-aos="fade-up">
                <tbody>
                    <tr>
                        <td>{getServiceIcon(sampleData[0][mode1.mode_attr + '_serv'])} <br/> {getServiceType(sampleData[0][mode1.mode_attr + '_serv'])}</td>
                        <td>{getServiceIcon(sampleData[0][mode2.mode_attr + '_serv'])} <br/> {getServiceType(sampleData[0][mode2.mode_attr + '_serv'])}</td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default ModeChoice;
