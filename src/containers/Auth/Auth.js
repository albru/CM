import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../../components/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.css';
import { updateObject } from '../../shared/utility.js';
import { authData } from './authData/authData';
import { checkValidity, createElementsArray } from '../../shared/utility.js';
import * as actions from '../../store/actions/index';


;