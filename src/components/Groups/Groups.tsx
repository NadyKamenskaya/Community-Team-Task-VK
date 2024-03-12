import { useSelector } from 'react-redux';

import { PanelHeader } from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Group } from '@vkontakte/vkui/dist/components/Group/Group';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';
import { Banner } from '@vkontakte/vkui/dist/components/Banner/Banner';
import { Button } from '@vkontakte/vkui/dist/components/Button/Button';

import { Group as GroupType } from '../../utils/types';
import { customSelectors } from '../../slices/groupsSlice';

type Props = {
  onClick: (group: GroupType) => void;
  activeFilter: string;
};

const Groups = ({ onClick, activeFilter }: Props) => {
  const mapper = {
    'all': useSelector(customSelectors.allGroups),
    'closed': useSelector(customSelectors.closedGroups),
    'opened': useSelector(customSelectors.openedGroups),
    'friends': useSelector(customSelectors.friendsGroups),
    'noFriends': useSelector(customSelectors.notFriendsGroups),
    'color': useSelector(customSelectors.colorGroups),
    'red': useSelector(customSelectors.redGroups),
    'green': useSelector(customSelectors.greenGroups),
    'yellow': useSelector(customSelectors.yellowGroups),
    'blue': useSelector(customSelectors.blueGroups),
    'purple': useSelector(customSelectors.purpleGroups),
    'white': useSelector(customSelectors.whiteGroups),
    'orange': useSelector(customSelectors.orangeGroups),
  }

  return (
    <>
          <PanelHeader>Groups</PanelHeader>
          <Group>
            {activeFilter.length !== 0 && mapper[activeFilter].map((group: GroupType) => (
              <Div key={group.id}>
                <Banner
                  before={
                    <div
                      style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: `${group.avatar_color}` || undefined }}
                    />
                  }
                  header={group.name}
                  subheader={group.closed ? 'Закрытая группа' : 'Открытая группа'}
                  text={group.members_count ? `Количество подписчиков: ${group.members_count}` : null}
                  actions={group.friends ? <Button onClick={() => onClick(group)}>{`Количество друзей: ${group.friends.length}`}</Button> : null}
                />
              </Div>
            ))}
          </Group>
    </>
  );
};

export default Groups;
