import React from 'react';
import Head from 'next/head';
import { Button } from 'baseui/button';
import { Navigation } from 'baseui/side-navigation';
import { useState } from 'react';

const Home = () => {
  const [activeItemId, setActiveItemId] = useState('#dark');

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <Button>Hello</Button>
        <Navigation
          items={[
            {
              title: 'Colors',
              itemId: '#colors',
              subNav: [
                { title: 'Primary', itemId: '#primary' },
                {
                  title: 'Shades',
                  itemId: '#shades',
                  subNav: [{ title: 'Dark', itemId: '#dark' }],
                },
              ],
            },
          ]}
          activeItemId={activeItemId}
          onChange={({ item }) => setActiveItemId(item.itemId)}
        />
      </div>
    </div>
  );
};

export default Home;
