import { StyleSheet } from "react-native";
import { Box, Spacer, Text, Touchable } from "..";
import { colors } from '../../styles/theme.json'
import { useEffect, useState } from "react";

export function Picker({ title = '', options = [], initialValue = '', onChange = value => { } }) {

    const [selected, setSelected] = useState('')

    useEffect(() => {
        setSelected(initialValue)
    }, [])

    return (
        <>
            <Text color="dark" bold variant="big">{title}</Text>
            <Spacer size="20px" />
            <Box row fluid height="50px">
                {options?.map((opt, index) => (
                    <Touchable
                        onPress={() => [
                            setSelected(opt?.value),
                            onChange(opt?.value)
                        ]}
                        key={index}
                        style={[styles.base, styles[selected === opt?.value ? 'checked' : 'unchecked']]}>
                        <Text style={selected === opt?.value ? styles.textChecked : undefined}>{opt?.label}</Text>
                    </Touchable>
                ))}
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    base: {
        maxWidth: 45,
        height: 45,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unchecked: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.muted,
    },
    checked: {
        backgroundColor: colors.primary,
    },
    textChecked: {
        color: colors.light
    }
});
