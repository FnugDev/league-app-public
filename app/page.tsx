"use client";
import { useEffect, useState } from 'react';
import { authenticate } from 'league-connect';
import { Button, Grid, Stack } from '@mui/material';

export default function Home() {
  const [credentials, setCredentials] = useState(null);

  useEffect(() => {
    async function fetchCredentials() {
      const creds = await authenticate();
      setCredentials(creds);
    }

    fetchCredentials();
  }, []);

  useEffect(() => {
    if (credentials) {
      console.log(credentials); // { password: '37dn2gsxH3ns', port: 37241 }
    }
  }, [credentials]);

  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Using Material UI with Next.js 13</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}

