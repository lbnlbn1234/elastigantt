export function TreeRow(prefix, self) {
  return self.wrapComponent({
    props: ['task', 'index'],
    template: `<g>
      <rect
        class="elastigantt__tree-row"
        v-bind:id="task.id"
        v-bind:x="task.x"
        v-bind:y="task.y"
        v-bind:width="task.width"
        v-bind:height="task.height"
        v-bind:style="getStyle"
      ></rect>
      <text
      :x="task.x+2"
      :y="getTextY"
      :style="getTextStyle"
      alignment-baseline="middle"
      >{{task.label}}</text>
      </g>`,

    data() {
      return {};
    },
    computed: {
      getStyle() {
        return this.task.style ? this.task.style : this.$root.$data.row.style;
      },
      getTextY(){
        let state = this.$root.$data;
        return this.task.y + state.row.height/2;
      },
      getTextStyle(){
        let state = this.$root.$data;
        return `${state.row.textStyle};font-family:${state.row.fontFamily};font-size:${state.row.fontSize}`;
      }
    }
  });
}