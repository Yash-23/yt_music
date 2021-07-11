import useStyles from "../Styles/SongBoxHomeStyle.js";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SongBoxHome = () =>{
    const classes = useStyles();
    return (
        <div className={classes.button}>
              {/*<img src="https://assets.vogue.com/photos/58bd86fe3bbebb17ef1a6027/4:3/pass/00-square-emma-watson-feminist.jpg"*/}
              {/*     className={classes.thumbnail}*/}
              {/*     alt="Song"*/}
              {/*     height={'180px'}*/}
              {/*     width={'180px'}/>*/}
            <div
                 className={classes.thumbnail}>
            </div>
            <div>
                <MoreVertIcon className={classes.dotIcon}/>
            </div>
        </div>
    )
}
export default SongBoxHome;