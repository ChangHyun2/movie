import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Keyword, Movie } from "../movies/page";
import { Rating } from "@mui/material";
import {
  Home,
  LinkOffOutlined,
  LinkOutlined,
  MoveDown,
} from "@mui/icons-material";
import PageLoader from "next/dist/client/page-loader";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ movie }: { movie: Movie }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Production,
    Rated,
    Runtime,
    Type,
    Website,
    Writer,
    imdbID,
    imdbRating,
    imdbVotes,
  } = movie;

  const detail = {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Production,
    Rated,
    Runtime,
    Type,
    Website,
    Writer,
    imdbID,
    imdbRating,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={movie.Title}>
            {movie.Genre.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" href={`/keywords`}>
            <Home />
          </IconButton>
        }
        title={movie.Title}
        subheader={movie.Released}
      />
      <CardMedia
        component="img"
        height="194"
        src={movie.Poster}
        alt="Paella dish"
      />
      <CardContent>
        <div>
          <Rating
            name="read-only"
            value={(+movie.Ratings[0].Value.slice(0, 3) / 10) * 5}
            readOnly
          />
        </div>
        {Object.entries(detail).map(([key, info]) => (
          <div key={key}>
            <Typography variant="caption">
              {`${key} : ${
                typeof info === "string" ? info : JSON.stringify(info)
              }`}
            </Typography>
          </div>
        ))}
        <Typography variant="caption">hello</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie.Plot}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
