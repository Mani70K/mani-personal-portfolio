<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- Keep portfolio content in `src/lib/portfolio-data.ts` so experience, projects, and skills remain easy to update without changing presentation components.
- Keep the portfolio as one intentional scrolling page because its navigation and content brief explicitly require smooth in-page section navigation.
