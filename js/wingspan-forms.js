define([
    './AutoControl',
    './FormField',
    './controls/Button',
    './controls/Carousel',
    './controls/CheckBox',
    './controls/KendoAutoComplete',
    './controls/KendoComboBox',
    './controls/KendoDate',
    './controls/KendoTime',
    './controls/KendoDatetime',
    './controls/KendoGrid',
    './controls/KendoGridPicker',
    './controls/KendoListView',
    './controls/KendoMultiSelect',
    './controls/KendoNumber',
    './controls/KendoTabStrip',
    './controls/TabStrip',
    './controls/KendoText',
    './controls/MultiSelect',
    './controls/MultilineText',
    './controls/Radio',
    './controls/RadioGroup',
    './controls/SwitchBox',
    './controls/KendoPager',
    './controls/PromiseButton',
    './controls/SearchBox',
    './controls/SelectionListDismissible',
    './ControlCommon',
    './AutoField',
    './FluxFormMixin',
    './ImmutableOptimizations'
], function (AutoControl, FormField, Button, Carousel, CheckBox, KendoAutoComplete, KendoComboBox, KendoDate, KendoTime, KendoDatetime,
             KendoGrid, KendoGridPicker, KendoListView, KendoMultiSelect, KendoNumber, KendoTabStrip, TabStrip, KendoText, MultiSelect,
             MultilineText, Radio, RadioGroup, SwitchBox, KendoPager, PromiseButton, SearchBox, SelectionListDismissible,
             ControlCommon, AutoField, FluxFormMixin, ImmutableOptimizations) {
    'use strict';

    // If the function arguments get out-of-sync with the require define(), the last argument might be undefined.
    console.assert(ImmutableOptimizations);

    // This module should never actually be used.  It exists only to collect all of the top-level modules into one
    // place so that the require optimizer can do a single-page optimization across the entire application
    //
    // It also must collect all of the items from the component registry.  They are needed because they do not
    // have any "hard" require references that the optimizer can see.
    //
    // Specifically, parameters to the container function do not need to be declared, and this body should not do anything
    return {
        AutoControl: AutoControl,
        FormField: FormField,
        Button: Button,
        Carousel: Carousel,
        CheckBox: CheckBox,
        KendoAutoComplete: KendoAutoComplete,
        KendoComboBox: KendoComboBox,
        KendoDate: KendoDate,
        KendoTime: KendoTime,
        KendoDatetime: KendoDatetime,
        KendoGrid: KendoGrid,
        KendoGridPicker: KendoGridPicker,
        KendoListView: KendoListView,
        KendoMultiSelect: KendoMultiSelect,
        KendoNumber: KendoNumber,
        KendoTabStrip: KendoTabStrip,
        TabStrip: TabStrip,
        KendoText: KendoText,
        MultiSelect: MultiSelect,
        MultilineText: MultilineText,
        Radio: Radio,
        RadioGroup: RadioGroup,
        SwitchBox: SwitchBox,
        KendoPager: KendoPager,
        PromiseButton: PromiseButton,
        SearchBox: SearchBox,
        SelectionListDismissible: SelectionListDismissible,
        ControlCommon: ControlCommon,
        AutoField: AutoField,
        FluxFormMixin: FluxFormMixin,
        ImmutableOptimizations: ImmutableOptimizations
    };
});
