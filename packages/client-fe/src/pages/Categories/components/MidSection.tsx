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

const StyledLink = styled(Link)`
  width: 100%;
`;

export default class MidSection extends React.Component<MidSectionProps, any> {
  state = {
    categories: [] = [
      {
        id: 'behavior',
        icon: BehaviorIcon,
        text: 'Behavior',
      },
      {
        id: 'pests',
        icon: PestsIcon,
        text: 'Pests',
      },
      {
        id: 'circulatory',
        icon: CirculatoryIcon,
        text: 'Circulatory System',
      },
      {
        id: 'integumentary',
        icon: IntergmentIcon,
        text: 'Integumentary System',
      },
      {
        id: 'clinicalPathology',
        icon: ClinicalIcon,
        text: 'Clinical Pathology and Procedures',
      },
      {
        id: 'managementAndNutrition',
        icon: ManagementIcon,
        text: 'Management and Nutrition',
      },
      {
        id: 'digestive',
        icon: DigestiveIcon,
        text: 'Digestive System',
      },
      {
        id: 'metabolistic',
        icon: MetabolicIcon,
        text: 'Metabolic Disorders',
      },
      {
        id: 'emergency',
        icon: EmergencyIcon,
        text: 'Emergency Medicine and Critical Care',
      },
      {
        id: 'musculoskeletal',
        icon: MusculoskeletalIcon,
        text: 'Musculoskeletal Systems',
      },
      {
        id: 'endocrine',
        icon: EndocrineIcon,
        text: 'Endocrine System',
      },
      {
        id: 'nervousSystem',
        icon: NervousIcon,
        text: 'Nervous System',
      },
      {
        id: 'exotic',
        icon: ExoticIcon,
        text: 'Exotic and Laboratory Animals',
      },
      {
        id: 'pharmacology',
        icon: PharmaIcon,
        text: 'Pharmacology',
      },
      {
        id: 'eyeAndEar',
        icon: EyeIcon,
        text: 'Eye and Ear',
      },
      {
        id: 'poultry',
        icon: PoultryIcon,
        text: 'Poultry',
      },
      {
        id: 'general',
        icon: GeneralIcon,
        text: 'Generalized Conditions',
      },
      {
        id: 'publicHealth',
        icon: PublicIcon,
        text: 'Public Health',
      },
    ],
  };

  renderCategories = () => {
    const { categories } = this.state;
    return categories.map(({ id, icon, text }) => (
      <ListItem key={id}>
        <StyledLink
          to={{
            pathname: `/categories/${id}`,
            state: { id },
          }}
        >
          <CategoryCard icon={icon} text={text} />
        </StyledLink>
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
