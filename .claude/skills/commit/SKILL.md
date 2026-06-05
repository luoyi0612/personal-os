# Commit Skill

## Overview

按照 Conventional Commits 规范暂存变更并创建 git 提交。

## Steps

1. 运行 `git status` 和 `git diff` 了解当前变更
2. 根据变更内容判断 commit type：
   - `feat` 新功能
   - `fix` 修复 bug
   - `docs` 仅文档变更
   - `style` 格式、空白等不影响逻辑的变更
   - `refactor` 重构（非 feat/fix）
   - `test` 测试相关
   - `chore` 构建/工具/依赖等
3. 暂存所有变更：`git add -A`（或指定文件）
4. 构造 commit message：
   - 格式：`type(scope): subject`
   - scope 可选，填受影响的模块/目录（如 `blog`、`ui`、`lib`）
   - subject 动词原形开头，首字母小写，不加句号，≤ 72 字符
5. 执行提交，不加 `--no-verify`

## Commit Message Examples

```bash
feat(blog): add tag filter to post list
fix(mdx): resolve frontmatter parse error for draft field
docs: update README with local dev steps
chore: add prettier and prettier-plugin-tailwindcss
refactor(lib): extract mdx utils into separate module
```

## Rules

- 每次提交只包含一个逻辑单元
- 不提交 `console.log`、调试代码、临时注释
- 如有未暂存的不相关变更，单独提交或 stash
- 提交前确认 `eslint` 通过（`npm run lint`）
