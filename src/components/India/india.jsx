import React, { Component } from 'react';
import {fetchDataIndia} from '../../api/index'
import IndiaUI from './india_ui'
import {Bar} from 'react-chartjs-2'
import styles from './india.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import image from '../../images/image.png';


class IndiaTracker extends Component {

    async componentDidMount(){
        const data = await fetchDataIndia();
        this.setState({districtData:data.map(({districtData})=>(districtData)), 
        stateName:data.map(({state})=>(state))});
    }
    
    state = { 
        stateName:[],
        districtData:[[{}]],
        showGraph:false,
        stateToShow:'',
        districtDataBar:[{
            district:'Select State',
            confirmed:0,
            deaths:0
        }]
        
    }

    getGraphData=(stateName)=>{
        let index = this.state.stateName.indexOf(stateName);
        const districts = this.state.districtData[[index]].map((districtName)=>(
            {district:districtName.district,
                confirmed:districtName.confirmed,
                deaths:districtName.deceased}));
        
        return(districts)
    }

    handleStateChange = async(stateName)=>{
        
        this.setState({showGraph:true, stateToShow:stateName, 
            districtDataBar:this.getGraphData(stateName)});
    }


    render(){ 
        
        
        if(!this.state.districtData[[32]]){
            return(
                <div>Loading..</div>
            )
        }else
        return (
           <div>
               <img className={styles.image} src={image} alt="COVID-19" />
               <Cards data={this.state.districtDataBar} />
               <IndiaUI onChange={this.handleStateChange} stateName={this.state.stateName} />
               <Charts data={this.state.districtDataBar} />
           </div>
        )
         
}
}

class Charts extends Component{

    state={
        chartData:{
            labels:this.props.data.map(({district})=>(district)),
            datasets:[{
                data:0,
                backgroundColor:'black'
            }]
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data!==this.props.data){
            this.setState({chartData:{labels:this.props.data.map(({district})=>(district)),
            datasets:[{
                data:this.props.data.map(({confirmed})=>(confirmed)),
                label:'Confirmed Cases',
                backgroundColor:'green'
            },
            {
                data:this.props.data.map(({deaths})=>(deaths)),
                label:'Deaths',
                backgroundColor:'red'
            }
        ]    
        
        }})
        }
    }

    render(){
        
        return(
            <div className={styles.container}>
                <Bar 
                    data={this.state.chartData}
                />
            </div>
        )
    }
    
}

const Cards = (props) => {
    console.log(props.data);
    
    const sum = (total,num)=>{
        return total+num;
    }
    const totalValue=()=>{
        const confirmed = props.data.map(({confirmed})=>confirmed);
        const deaths = props.data.map(({deaths})=>deaths);
        const totalConfirmed = confirmed.reduce(sum,0);
        const totaldeaths = deaths.reduce(sum,0);

        return {totalConfirmed,totaldeaths};
    }

    console.log(totalValue());

    return ( 
        
        <div className={styles.containerCards}>
        <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Confirmed
                </Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={totalValue().totalConfirmed} duration={1.5} separator="," />
                </Typography>
                <Typography variant="body2" component="p">
                    Number of confirmed cases
                </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Confirmed
                </Typography>
                <Typography variant="h5" component="h2">
                <CountUp start={0} end={totalValue().totaldeaths} duration={1.5} separator="," />
                </Typography>
                <Typography variant="body2" component="p">
                    Number of deaths
                </Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
     );
}

 
export default IndiaTracker;