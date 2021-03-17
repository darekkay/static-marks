# Using static-marks with Gitlab Pages

You can leverage [Gitlab Pages](https://docs.gitlab.com/ee/user/project/pages/)
to host your static-marks instance.

Check the example [.gitlab-ci.yml](.gitlab-ci.yml) file
for an example pipeline that will use the latest
`node` image, cache the modules and build the
static-marks html page to be served by Gitlab directly.
