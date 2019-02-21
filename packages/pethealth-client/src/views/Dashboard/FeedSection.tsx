import * as React from 'react';
import RX from 'reactxp';
import Card from '../../components/Card';
import { Link } from '../../utils/routing/routing';
import { CardProps } from '../../components/Card/Card';
import {
  DashboardListProps,
  DashboardListComponent,
  DashboardListQuery,
} from '../../generated-models';

export interface FeedSectionProps extends DashboardListProps {}

export interface FeedSectionState {
  patients: CardProps[];
}

const style = {
  wrapper: RX.Styles.createViewStyle({
    overflow: 'visible',
    flex: 1,
  }),
  listItem: RX.Styles.createViewStyle({
    paddingBottom: 16,
    paddingTop: 16,
    paddingRight: 32,
    paddingLeft: 32,
  }),
  list: RX.Styles.createViewStyle({
    overflow: 'visible',
  }),
};

export default class FeedSection extends RX.Component<FeedSectionProps, any> {
  patients: CardProps[] = [
    {
      //   title: 'Mr Wluffy / Worms',
      description: `Cats can get infected by tapeworms, hookworms and whipworms. They get tapeworms by ingesting fleas infected with tapeworm eggs or by eating infected rodents. “The entire worm matures in the large intestine of the cat,” Lund said. “[Then] pieces of th...`,
      date: '24.02.2019',
      name: 'Dr. Elina',
    },
    {
      //   title: 'Max / Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion or absorption of food, or alters its passage through the digestive tract, can be called a digestive disord... `,
      date: '24.02.2019',
      name: 'Dr. Bergman',
    },
    {
      //   title: 'Captain Rio / Psittacosis',
      description: `Psittacosis, or "Parrot Fever," is a form of the Chlamydia bacterium that can affect all hookbills. The disease is highly contagious and can be passed from birds to other animals, as well as humans. Symptoms of Psittacosis include difficulty in breathing, eye inf...`,
      date: '24.02.2019',
      name: 'Dr. House',
    },
    {
      //   title: 'Mr Wluffy / Worms',
      description: `Dogs are sensitive to fleas and can develop allergies causing serious skin disease. Flea allergies can be quite severe, even if fleas are not seen on your dog. Pets with flea allergies are allergic to the flea saliva and become very itchy after being bitten. Use of flea pro...`,
      date: '24.02.2019',
      name: 'Dr. Williams',
    },
  ];

  state = {
    patients: this.patients,
  };

  renderCardItems = ({ feed = [] }: DashboardListQuery) => {
    return feed.map(({ content, author, createdAt }, index) => (
      <RX.View style={style.listItem} key={index}>
        <Link to="/detail" style={{ textDecoration: 'none' }}>
          <Card
            description={!content ? undefined : content}
            name={!author.name ? undefined : author.name}
            date={!createdAt ? undefined : createdAt}
          />
        </Link>
      </RX.View>
    ));
  };

  public render() {
    return (
      <RX.View style={style.wrapper}>
        {/* <FilterSection /> */}

        <RX.ScrollView style={style.list}>
          <DashboardListComponent>
            {({ data, error }) =>
              !error && !!data && this.renderCardItems(data)
            }
          </DashboardListComponent>
        </RX.ScrollView>
      </RX.View>
    );
  }
}
