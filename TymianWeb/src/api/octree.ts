import { getDataList, PixelData } from "./shared";

// --- 八叉树算法实现 --- //
export class Node {
  static leafNum = 0;
  static toReduce: Node[][] = new Array(8).fill(0).map(() => []);

  children: (Node | null)[] = new Array(8).fill(null);
  isLeaf = false;
  r = 0;
  g = 0;
  b = 0;
  childrenCount = 0;

  constructor(info?: { index: number; level: number }) {
    if (!info) return;
    if (info.level === 7) {
      this.isLeaf = true;
      Node.leafNum++;
    } else {
      Node.toReduce[info.level].push(this);
      Node.toReduce[info.level].sort(
        (a, b) => a.childrenCount - b.childrenCount
      );
    }
  }

  addColor(color: PixelData, level: number) {
    if (this.isLeaf) {
      this.childrenCount++;
      this.r += color[0];
      this.g += color[1];
      this.b += color[2];
    } else {
      let str = "";
      const r = color[0].toString(2).padStart(8, "0");
      const g = color[1].toString(2).padStart(8, "0");
      const b = color[2].toString(2).padStart(8, "0");

      str += r[level];
      str += g[level];
      str += b[level];
      const index = parseInt(str, 2);

      if (this.children[index] === null) {
        this.children[index] = new Node({ index, level: level + 1 });
      }
      (this.children[index] as Node).addColor(color, level + 1);
    }
  }
}

export function reduceTree() {
  // 找到最深层有节点的层级
  let lv = 6;
  while (lv >= 0 && Node.toReduce[lv].length === 0) lv--;
  if (lv < 0) return;

  const node = Node.toReduce[lv].pop() as Node;
  // 合并子节点
  node.isLeaf = true;
  node.r = 0;
  node.g = 0;
  node.b = 0;
  node.childrenCount = 0;
  for (let i = 0; i < 8; i++) {
    if (node.children[i] === null) continue;
    const child = node.children[i] as Node;
    node.r += child.r;
    node.g += child.g;
    node.b += child.b;
    node.childrenCount += child.childrenCount;
    Node.leafNum--;
  }
  Node.leafNum++;
}

export function colorsStats(node: Node, record: Record<string, number>) {
  if (node.isLeaf) {
    // 计算平均颜色并转成16进制
    const r = (~~(node.r / node.childrenCount))
      .toString(16)
      .padStart(2, "0");
    const g = (~~(node.g / node.childrenCount))
      .toString(16)
      .padStart(2, "0");
    const b = (~~(node.b / node.childrenCount))
      .toString(16)
      .padStart(2, "0");

    const color = "#" + r + g + b;
    if (record[color]) record[color] += node.childrenCount;
    else record[color] = node.childrenCount;

    return;
  }

  for (let i = 0; i < 8; i++) {
    if (node.children[i] !== null) {
      colorsStats(node.children[i] as Node, record);
    }
  }
}

// 封装整个流程，返回主色调数组（例如取出现次数最多的 4 种颜色）
export async function processImages(): Promise<string[][]> {
  const dataList = await getDataList();
  const results: string[][] = [];
  dataList.forEach((data, imgIndex) => {
    console.log(`\n*** processing img ${imgIndex + 1} ***\n`);
    // 初始化八叉树相关静态变量
    const root = new Node();
    Node.toReduce = new Array(8).fill(0).map(() => []);
    Node.leafNum = 0;

    data.forEach((pixel: PixelData) => {
      root.addColor(pixel, 0);
      while (Node.leafNum > 16) {
        reduceTree();
      }
    });
    const record: Record<string, number> = {};
    colorsStats(root, record);
    const result = Object.entries(record)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([color]) => color);
    console.log(result);
    results.push(result);
  });
  return results;
}
