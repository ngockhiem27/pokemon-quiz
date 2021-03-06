import React from "react"
import { getTypeColor } from "../helper/quiz"
import { Typography, Grid, Paper, Hidden } from "@material-ui/core"

export default function PokemonMoveCard({ moveData }) {
  return (
    <Paper
      square={true}
      elevation={15}
      style={{ backgroundColor: "#ae9d244a" }}
    >
      <Grid container>
        <Grid item sm={12} md={8}>
          <Grid container>
            <Grid item xs={5}>
              <Paper
                square={true}
                style={{ backgroundColor: getTypeColor(moveData.type) }}
              >
                <Typography variant="h5">
                  {moveData.type.toUpperCase()}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper square={true} style={{ backgroundColor: "#dad6d6" }}>
                <Typography variant="h5">
                  {moveData.name.toUpperCase()}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "left", padding: 10 }}>
              <Typography variant="h5">{moveData.flavorText}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item sm={4} style={{ border: "3px solid black" }}>
            <Grid
              container
              style={{ textAlign: "center", borderBottom: "3px solid black" }}
            >
              <Grid item xs={6}>
                <Typography variant="h5">Category</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">
                  {moveData.category.toUpperCase()}
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{ borderBottom: "3px solid black" }}>
              <Grid item xs={6}>
                <Typography variant="h5">Accuracy</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">{moveData.accuracy}</Typography>
              </Grid>
            </Grid>
            <Grid container style={{ borderBottom: "3px solid black" }}>
              <Grid item xs={6}>
                <Typography variant="h5">Power</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">{moveData.power}</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h5">PP</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5">{moveData.pp}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  )
}
