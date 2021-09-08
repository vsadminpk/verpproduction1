# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in verp/__init__.py
from verp import __version__ as version

setup(
	name='verp',
	version=version,
	description='ERP Software',
	author='Vesper Solutions',
	author_email='verp@vespersolutions.tech',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
