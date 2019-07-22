import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    minWidth: 300
  },
  title: {
    fontSize: 14
  }
});

const Card = ({ data = {}, openCard }) => {
  const { card, title } = useStyles();
  const { id, state, number, application, shortDescription, assignee } = data;

  const handleClick = () => {
    openCard(id);
  };
  return (
    <MuiCard className={card}>
      <CardContent>
        <Typography variant="h5">{state}</Typography>
        <Typography className={title} gutterBottom>
          {number}
        </Typography>
        <Typography variant="h4">Application: {application}</Typography>
        <Typography variant="h4">Assignee: {assignee}</Typography>
        <Typography variant="body2">{shortDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button data-testid="learn-more" size="small" onClick={handleClick}>
          Learn more
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export const CoreDataType = {
  id: PropTypes.string,
  state: PropTypes.string,
  number: PropTypes.string,
  application: PropTypes.string,
  shortDescription: PropTypes.string,
  assignee: PropTypes.string
};

Card.propTypes = {
  data: PropTypes.shape(CoreDataType),
  openCard: PropTypes.func.isRequired
};

export default Card;
