import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';

const items = [
  {
    title: 'Mr Wluffy / Worms',
    description: `Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th...`,
    date: '24.02.2019',
    doctor: 'Dr. Elina',
  },
  {
    title: 'Max / Gastointestinal problems',
    description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
    date: '24.02.2019',
    doctor: 'Dr. Bergman',
  },
  {
    title: 'Captain Rio / Psittacosis',
    description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
    date: '24.02.2019',
    doctor: 'Dr. House',
  },
  {
    title: 'Mr Wluffy / Worms',
    description: `Dogs are sensitive to fleas and can develop allergies causing serious skin disease. Flea allergies can be quite severe, even if fleas are not seen on your dog. Pets with flea allergies are allergic to the flea saliva and become very itchy after being bitten. Use of flea pro...`,
    date: '24.02.2019',
    doctor: 'Dr. Williams',
  },
];

storiesOf('Card', module).add('Default', () => (
  <StorybookWrapper>
    {items.map((item, index) => (
      <Card {...item} key={index} />
    ))}
  </StorybookWrapper>
));
