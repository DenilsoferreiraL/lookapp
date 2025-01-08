import { colors } from '../../styles/theme.json'
import { ScrollView, Text, Touchable } from '../../components/index';

export function Tabs({ tabs = [], active = '', onChange = (tab) => { } }) {

    const activeTabStyle = {
        borderBottomWidth: 3,
        borderBottomColor: colors.danger
    };

    return (
        <ScrollView
            horizontal
            style={{
                maxHeight: 60,
                backgroundColor: colors.light,
            }}
            contentContainerStyle={{
                flexDirection: "row",
                flex: 1,
            }}
        >
            {tabs.map((tab) => (
                <Touchable
                    key={tab.value}
                    onPress={() => onChange(tab.value)}
                    hasPadding
                    style={[
                        {
                            flex: 1,
                            alignItems: "center",
                        },
                        active === tab.value ? activeTabStyle : {},
                    ]}
                >
                    <Text color={active === tab.value ? "primary" : undefined}>
                        {tab.label}
                    </Text>
                </Touchable>
            ))}
        </ScrollView>
    );
}
