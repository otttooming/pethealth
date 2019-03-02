import * as React from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '../../../components/Card/Card';
import { Link } from 'react-router-dom';
import TopSection from './TopSection';
import CategoryCard from './CategoryCard';
import GeneralIcon from './Images/GeneralIcon.svg';
import BehaviorIcon from './Images/BehaviorIcon.svg';
import CirculatoryIcon from './Images/CirculatoryIcon.svg';
import ClinicalIcon from './Images/ClinicalIcon.svg';
import DigestiveIcon from './Images/DigestiveIcon.svg';
import EmergencyIcon from './Images/EmergencyIcon.svg';
import EndocrineIcon from './Images/EndocrineIcon.svg';
import ExoticIcon from './Images/ExoticIcon.svg';
import EyeIcon from './Images/EyeIcon.svg';
import IntergmentIcon from './Images/IntergmentalIcon.svg';
import ManagementIcon from './Images/ManagementIcon.svg';
import MetabolicIcon from './Images/MetabolicIcon.svg';
import MusculoskeletalIcon from './Images/MusculoskeletalIcon.svg';
import NervousIcon from './Images/NervousIcon.svg';
import PharmaIcon from './Images/PharmaIcon.svg';
import PoultryIcon from './Images/PoultryIcon.svg';
import PublicIcon from './Images/PublicIcon.svg';
import PestsIcon from './Images/PestsIcon.svg';

export interface MidSectionProps {}
export interface MidSectionState {}

const Wrapper = styled.div`
  background: #ffe7d6;
  height: 100vh;
  overflow-y: hidden;
  padding: 32px;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 24px;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export default class MidSection extends React.Component<MidSectionProps, any> {
  state = {
    categories: [] = [
      {
        id: 1,
        icon: BehaviorIcon,
        text: 'Behavior',
      },
      {
        id: 2,
        icon: PestsIcon,
        text: 'Pests',
      },
      {
        id: 3,
        icon: CirculatoryIcon,
        text: 'Circulatory System',
      },
      {
        id: 4,
        icon: IntergmentIcon,
        text: 'Integumentary System',
      },
      {
        id: 5,
        icon: ClinicalIcon,
        text: 'Clinical Pathology and Procedures',
      },
      {
        id: 6,
        icon: ManagementIcon,
        text: 'Management and Nutrition',
      },
      {
        id: 7,
        icon: DigestiveIcon,
        text: 'Digestive System',
      },
      {
        id: 8,
        icon: MetabolicIcon,
        text: 'Metabolic Disorders',
      },
      {
        id: 9,
        icon: EmergencyIcon,
        text: 'Emergency Medicine and Critical Care',
      },
      {
        id: 10,
        icon: MusculoskeletalIcon,
        text: 'Musculoskeletal Systems',
      },
      {
        id: 11,
        icon: EndocrineIcon,
        text: 'Endocrine System',
      },
      {
        id: 12,
        icon: NervousIcon,
        text: 'Nervous System',
      },
      {
        id: 13,
        icon: ExoticIcon,
        text: 'Exotic and Laboratory Animals',
      },
      {
        id: 14,
        icon: PharmaIcon,
        text: 'Pharmacology',
      },
      {
        id: 15,
        icon: EyeIcon,
        text: 'Eye and Ear',
      },
      {
        id: 16,
        icon: PoultryIcon,
        text: 'Poultry',
      },
      {
        id: 17,
        icon: GeneralIcon,
        text: 'Generalized Conditions',
      },
      {
        id: 18,
        icon: PublicIcon,
        text: 'Public Health',
      },
    ],
  };

  renderCategories = () => {
    const { categories } = this.state;
    return categories.map(({ id, icon, text }) => (
      <ListItem key={id}>
        <CategoryCard icon={icon} text={text} />
      </ListItem>
    ));
  };

  public render() {
    return (
      <Wrapper>
        <TopSection />
        <UnsortedList>{this.renderCategories()}</UnsortedList>
      </Wrapper>
    );
  }
}
