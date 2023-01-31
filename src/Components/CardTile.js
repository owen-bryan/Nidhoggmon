import { Card, CardActionArea, CardMedia, Typography } from "@mui/material"

const CardTile = ({card}) =>
{
    return (
        <Card>
            <CardActionArea>
                <CardMedia 
                    component='img' 
                    height="200" 
                    img={card.apiData.image_url} 
                    alt={card.apiData.name}
                />
                <CardActionArea>
                    <Typography gutterButtom variant="h5" component="div">
                        {card.apiData.cardname}
                    </Typography>
                </CardActionArea>
            </CardActionArea>
        </Card>
    )
}

export default CardTile