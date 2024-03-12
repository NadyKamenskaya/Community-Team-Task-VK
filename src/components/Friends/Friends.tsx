import { useSelector } from 'react-redux';

import { Group } from '@vkontakte/vkui/dist/components/Group/Group';
import { PanelHeader } from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderBack } from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import { SimpleCell } from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';

import { Icon28UserOutline } from '@vkontakte/icons';

import _ from 'lodash';

import { Group as GroupType, User } from '../../utils/types';
import { customSelectors } from '../../slices/groupsSlice';

type Props = {
  setActivePanel: React.Dispatch<React.SetStateAction<string>>,
};

const Friends = ({ setActivePanel }: Props) => {
  const currentGroup = useSelector(customSelectors.currentGroup) as GroupType;
  
  return (
    <>
      <PanelHeader
        delimiter="spacing"
        before={<PanelHeaderBack onClick={() => setActivePanel('groups')} />}
      >
        Friends
      </PanelHeader>
      <Group>
        {currentGroup && currentGroup.friends?.map((friend: User) => (
          <SimpleCell key={_.uniqueId()} before={<Icon28UserOutline />}>
            {`${friend.first_name} ${friend.last_name}`}
          </SimpleCell>
        ))}
      </Group>
  </>
  );
};

export default Friends;
