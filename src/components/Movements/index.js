import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';

import {
  MotiView,
  AnimatePresence,
  MotiText
} from 'moti';

export default function Movements({ data }) {
  const [showValue, setShowValue] = React.useState(false);
  return (
    <TouchableOpacity style={style.container} onPress={() => setShowValue(!showValue)}>

      <Text style={style.date}>{data.date}</Text>

      <View style={style.content}>
        <Text style={style.label}>
          {data.label}
        </Text>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText 
            style={data.type === 1 ? style.value : style.espenses}
            from={{
              translateX: 100,
            }}
            animate={{
              translateX: 0
            }}
            transition={{
              type: 'spring',
              duration: 500,
            }}
            >
              {data.type === 1 ? `€ ${data.value}` : `- € ${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView 
            style={style.skeletom}
            from={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              type: 'timing'
            }}
            >
            </MotiView>
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date: {
    color: '#dadada',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71'
  },
  espenses: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c'
  },
  skeletom: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#dadada',
    borderRadius: 8,
  }
})