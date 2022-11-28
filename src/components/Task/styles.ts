import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    padding: 0,
    gap: 20,
    position: "absolute",
    height: 391,
    marginLeft: 18,
    marginRight: 18,
    top: 228,
  },

  conter:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 0,
    gap: 561,

    width: 327,
    height: 19,
    marginBottom: 20,

  },



  containerTask: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 8,

    width: 327,
    height: 64,

    backgroundColor: '#262626',
    boder: '1 solid #333333',
    borderRadius: 8,
    boxShadow: '0 2 8 rgba(0, 0, 0, 0.06)',
  },

  taskText: {
    width: 235,
    height: 40,
    fontSize: 14,
    lineHeight: 20,
    color: '#f2f2f2',
  },
})