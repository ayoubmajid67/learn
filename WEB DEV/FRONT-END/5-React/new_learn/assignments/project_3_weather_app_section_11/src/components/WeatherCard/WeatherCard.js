// custom css import :
import "./WeatherCard.css";

// material ui imports :
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import WeatherCardHeader from "./../WeatherCardHeader/WeatherCardHeader";
import { Stack } from "@mui/material";

// weather stats imgs :
import designImage from "../../static/design.png";
import cloudImg from "../../static/cloud.png";
import cloudyImg from "../../static/cloudy.png";
import sunImg from "../../static/sun.png";
import CityForm from "../CityForm/CityForm";
export default function WeatherCard() {
	return (
		<Card sx={{ minWidth: "345px",maxWidth:"500px",marginTop: "-40px"   }}  className="weatherCardComponentClass">
			<CardActionArea>
				<CardContent>
					<WeatherCardHeader />
					<Stack className="bodyContent" direction="row" spacing="20px">
						<Stack className="leftSide" direction="row"  spacing="20px" justifyContent="space-between"  >
							<Stack className="textContent" justifyContent="space-between">
								<h1  >40</h1>
								<h4>a Clear sky</h4>
								<p>
								min: <span>40</span>&nbsp; | &nbsp;max: <span>40</span>
								</p>
							</Stack>

							<Stack className="weatherImgStatContainer" >
								<img src={sunImg} style={{width:"80px" , height:"80px",marginTop:"10px"}} alt="sun image" />
							</Stack>
						</Stack>
						<Stack className="rightSide" justifyContent="center" alignItems="center">
							<img src={cloudImg}  style={{width:"85%"}} alt="cloud image" />
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>

			<CityForm/>

		
		</Card>
	);
}
