import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SplitLayout } from '@vkontakte/vkui/dist/components/SplitLayout/SplitLayout';
import { SplitCol } from '@vkontakte/vkui/dist/components/SplitCol/SplitCol';
import { CustomSelect } from '@vkontakte/vkui/dist/components/CustomSelect/CustomSelect';
import { View } from '@vkontakte/vkui/dist/components/View/View';
import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';

import { mockGroups } from './mockGroups';
import { Group as GroupType } from './utils/types';
import getOptions from './utils/getOpitons';
import { customSelectors, addMany, changeGroup } from './slices/groupsSlice';

import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';

const App = () => {
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState<string>('');
  const [activePanel, setActivePanel] = useState<string>('groups');

  useEffect(() => {
    try {
      setTimeout(() => dispatch(addMany(mockGroups)), 1000);
    } catch (error) {
      throw new Error('error');
    }
  }, [dispatch]);

  const colorNames = useSelector(customSelectors.colorNames);
  const options = getOptions(colorNames);

  const onClick = (group: GroupType) => {
    dispatch(changeGroup(group));
    setActivePanel('friends');
  };

  return (
    <SplitLayout style={{ justifyContent: 'center' }}>
      <SplitCol fixed width='35%' style={{ marginRight: '20px' }}>
        <CustomSelect
          placeholder='Выберите фильтр отображения групп'
          options={options}
          onChange={(event) => setActiveFilter(event.target.value)}
        />
      </SplitCol>
      <SplitCol width='65%'>
      <View activePanel={activePanel}>
        <Panel id='groups'>
          <Groups onClick={onClick} activeFilter={activeFilter} />
        </Panel>
        <Panel id='friends'>
          <Friends setActivePanel={setActivePanel} />
        </Panel>
      </View>
      </SplitCol>
    </SplitLayout>
  );
}

export default App;
 