# npm link resolved module identity

Normally when you `require()` the same version of the same module in two different places, you get the exact same value instance back. This is because `npm` will deduplicate the dependency rather than installing it twice. If one of your modules is installed with symlinks, however, the nodejs module resolver cache will not be effective because the filesystem path to the module is not the same in each case.

This makes using `npm link` during development dangerous if your code in any way depends on referential equality of a resolved module. This is especially troublesome with the `instanceof` operator.

```console
$ node linked/module-one
semver: function SemVer
semverTwo: function SemVer
===? false

$ node installed-from-pack/module-one
semver: function SemVer
semverTwo: function SemVer
===? true
```
