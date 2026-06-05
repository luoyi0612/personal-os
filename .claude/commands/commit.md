按照 Conventional Commits 规范提交当前变更。

## 步骤

1. 运行 `git status` 和 `git diff --staged && git diff` 了解变更内容
2. 根据变更判断 type：`feat` / `fix` / `docs` / `style` / `refactor` / `test` / `chore`
3. 构造 commit message：`type(scope): subject`
   - scope 可选，填受影响模块（如 `blog`、`ui`、`lib`）
   - subject 动词原形开头，首字母小写，≤ 72 字符，不加句号
4. 暂存所有变更并提交（不加 `--no-verify`）

## 规则

- 每次提交只包含一个逻辑单元
- 不提交 `console.log`、调试代码、临时注释
- 提交前确认 lint 通过
