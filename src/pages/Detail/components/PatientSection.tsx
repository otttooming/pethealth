import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName, IconSize } from '../../../components/Icon/Icon';
import Button from '../../../components/Button/Button';
import NavigationBack from '../../../components/NavigationBack/NavigationBack';
import gallery1 from './gallery1.png';
import gallery2 from './gallery2.png';
import gallery3 from './gallery3.png';
import gallery4 from './gallery4.png';
import EntryField from '../../../components/EntryField/EntryField';
import {
  CreateDraftMutation,
  withCreateDraft,
  CreateDraftMutationVariables,
  DeletePostMutation,
  PostType,
} from '../../../generated-models';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { MutateProps } from '@apollo/react-hoc';
import EditButton from './EditButton';

interface Params {
  id: string;
}

type HocExtends = RouteComponentProps<Params> &
  MutateProps<CreateDraftMutation, CreateDraftMutationVariables>;

export interface PatientSectionProps extends HocExtends {
  onChangeEditable: (isEditmode: boolean) => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Top = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: Bold;
  line-height: 18px;
  font-size: 24px;
  margin-bottom: 20px;
  color: #000000;
`;

interface TdProps {
  isKey?: boolean;
}

const Td = styled.td<TdProps>`
  width: 100px;
  height: 40px;
  color: ${props => ({ isKey }) => (isKey ? '#828282' : '#333333')};
`;

const Table = styled.table`
  margin-bottom: 20px;
`;

const Bottom = styled.ul`
  display: grid;
  height: auto;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
`;

const ListItem = styled.li`
  list-style: none;
  width: 55px;
  height: 55px;
`;

const NavWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

class PatientSection extends React.Component<PatientSectionProps, any> {
  static defaultProps = {
    onChangeEditable: () => null,
  };

  constructor(props: PatientSectionProps) {
    super(props);

    this.state = {
      species: '',
      breed: '',
      sex: '',
      age: '',
      weight: '',
      isEditable: this.getIsNew(props),
    };
  }

  handleInputChange = (event: any, type: string) => {
    const {
      currentTarget: { value },
    } = event;

    this.setState({
      [type]: value,
    });
  };

  changeEditable = () => {
    this.setState(
      {
        isEditable: !this.state.isEditable,
      },
      this.onChangeEditable,
    );
  };

  onChangeEditable = () => {
    const { onChangeEditable } = this.props;
    const { isEditable } = this.state;

    onChangeEditable(isEditable);
  };

  public render() {
    const { species, breed, sex, age, weight, isEditable } = this.state;

    return (
      <Wrapper>
        <NavWrapper>
          <NavigationBack to="/patients" />
        </NavWrapper>
        <Top>
          <Icon name={IconName.PAW} size={IconSize.HUGE} />
        </Top>
        <Title />

        <Table>
          <tbody>
            <tr>
              <Td isKey={true}>Species: </Td>
              <EntryField
                isEditable={this.state.isEditable}
                value={species}
                type={'species'}
                defaultValue={species}
                placeholder={'species'}
                onChange={this.handleInputChange}
              />
            </tr>
            <tr>
              <Td isKey={true}>Breed: </Td>
              <EntryField
                isEditable={this.state.isEditable}
                value={breed}
                type={'breed'}
                defaultValue={breed}
                placeholder={'breed'}
                onChange={this.handleInputChange}
              />
            </tr>
            <tr>
              <Td isKey={true}>Sex: </Td>
              <EntryField
                isEditable={this.state.isEditable}
                value={sex}
                type={'sex'}
                defaultValue={sex}
                placeholder={'sex'}
                onChange={this.handleInputChange}
              />
            </tr>
            <tr>
              <Td isKey={true}>Age: </Td>
              <EntryField
                isEditable={this.state.isEditable}
                value={age}
                type={'age'}
                defaultValue={age}
                placeholder={'age'}
                onChange={this.handleInputChange}
              />
            </tr>
            <tr>
              <Td isKey={true}>Weight: </Td>
              <EntryField
                isEditable={this.state.isEditable}
                value={weight}
                type={'weight'}
                defaultValue={weight}
                placeholder={'weight'}
                onChange={this.handleInputChange}
              />
            </tr>
          </tbody>
        </Table>

        <Bottom>
          <ListItem>
            <Image src={gallery2} />
          </ListItem>
          <ListItem>
            <Image src={gallery3} />
          </ListItem>
          <ListItem>
            <Image src={gallery4} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
          <ListItem>
            <Image src={gallery1} />
          </ListItem>
        </Bottom>

        {this.renderPostModify()}
      </Wrapper>
    );
  }

  private getIsNew = (props: PatientSectionProps) => {
    const {
      match: { params },
    } = props;

    const { id: postId } = params;

    const isNew = !postId;

    return isNew;
  };

  private createDraft = async () => {
    const { mutate, history } = this.props;

    const options = {
      variables: { title: 'Patient', type: PostType.ForumPost },
    };

    const response = await mutate(options);

    if (response && response.data) {
      const {
        data: {
          createDraft: { id },
        },
      } = response;

      history.replace(`/detail/${id}`);
    }
  };

  private deletePost = async () => {
    const {
      match: { params },
      mutate,
    } = this.props;

    const { id: postId } = params;
    console.log(postId);
  };

  private renderPostModify = () => {
    const {
      match: { params },
    } = this.props;
    const { isEditable, ...restProps } = this.state;

    const { id: postId } = params;

    const isNew = !postId;

    if (isNew) {
      return <Button onClick={this.createDraft}>Create new record</Button>;
    }

    return (
      <>
        {isEditable ? (
          <EditButton
            onChangeEditable={this.changeEditable}
            options={restProps}
          >
            {' '}
            Save{' '}
          </EditButton>
        ) : (
          <Button onClick={this.changeEditable}> Edit </Button>
        )}
      </>
    );

    return <Button onClick={this.deletePost}>Delete</Button>;
  };
}

const withwithCreateDraft = withCreateDraft({});

export default withwithCreateDraft(
  // @ts-ignore
  withRouter<PatientSectionProps>(PatientSection),
);
