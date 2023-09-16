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
import { ImageListItem, ImageListItemBar, Rating } from "@mui/material";
import {
  DetailsOutlined,
  InfoOutlined,
  MoreOutlined,
} from "@mui/icons-material";
import Image from "next/image";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function KeywordCard({ keyword }: { keyword: Keyword }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={keyword.name}>
            {keyword.name.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            href={`/movies?keyword=${encodeURI(keyword.name)}`}
          >
            <MoreOutlined />
          </IconButton>
        }
        title={keyword.name}
      />
      <CardMedia
        component="img"
        height="194"
        src={keyword.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {keyword.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
